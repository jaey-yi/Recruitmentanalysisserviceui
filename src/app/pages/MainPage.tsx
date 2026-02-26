import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { JobRequestModal } from "../components/JobRequestModal";
import { mockJobs } from "../data/mockData";

export function MainPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("all");
  const [sortBy, setSortBy] = useState("latest");
  const [isJobRequestOpen, setIsJobRequestOpen] =
    useState(false);

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      job.companyName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <div className="bg-white border-b py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <Input
                placeholder="공고 제목으로 검색하세요"
                className="pl-12 h-14 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                직무 필터링:
              </span>
              <Button
                variant={
                  selectedCategory === "all"
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedCategory("all")}
              >
                전체
              </Button>
              <Button
                variant={
                  selectedCategory === "프론트엔드"
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setSelectedCategory("프론트엔드")
                }
              >
                프론트엔드
              </Button>
              <Button
                variant={
                  selectedCategory === "백엔드"
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedCategory("백엔드")}
              >
                백엔드
              </Button>
              <Button
                variant={
                  selectedCategory === "AI"
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedCategory("AI")}
              >
                AI
              </Button>
              <Button
                variant={
                  selectedCategory === "데이터 분석"
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setSelectedCategory("데이터 분석")
                }
              >
                데이터 분석
              </Button>
              <Button
                variant={
                  selectedCategory === "게임"
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedCategory("게임")}
              >
                게임
              </Button>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">
                  최신 등록 순
                </SelectItem>
                <SelectItem value="deadline">
                  마감일 순
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/job/${job.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm text-gray-600">
                      {job.company}
                    </p>
                    <h3 className="mt-1">{job.title}</h3>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {job.summary}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">
                      {job.category}
                    </Badge>
                    <Badge variant="outline">
                      {job.experience}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-3 border-t">
                    <span className="text-sm text-gray-500">
                      마감일
                    </span>
                    <span className="text-sm">
                      {job.deadline}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsJobRequestOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2 pr-6"
      >
        <Plus className="size-6" />
        <span>공고 등록 요청</span>
      </button>

      <JobRequestModal
        isOpen={isJobRequestOpen}
        onClose={() => setIsJobRequestOpen(false)}
      />
    </div>
  );
}