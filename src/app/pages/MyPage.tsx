import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  User,
  Bookmark,
  FileText,
  ClipboardList,
  Lightbulb,
  MessageSquare,
  Trash2,
  Plus,
  Eye,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import {
  mockBookmarks,
  mockFiles,
  mockExperiences,
  mockStrategies,
  mockInterviews,
} from "../data/mockData";

export function MyPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeTab = searchParams.get("tab") || "profile";
  const [experiences, setExperiences] =
    useState(mockExperiences);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);

  const tabs = [
    { id: "profile", label: "프로필 관리", icon: User },
    { id: "bookmarks", label: "북마크 관리", icon: Bookmark },
    { id: "files", label: "내 파일 관리", icon: FileText },
    {
      id: "experiences",
      label: "내 경험 관리",
      icon: ClipboardList,
    },
    {
      id: "strategies",
      label: "포폴 전략 관리",
      icon: Lightbulb,
    },
    {
      id: "interviews",
      label: "면접 결과 관리",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() =>
                          navigate(`/mypage?tab=${tab.id}`)
                        }
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="size-5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>프로필 관리</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">이름</Label>
                      <Input id="name" defaultValue="김개발" />
                    </div>
                    <div>
                      <Label htmlFor="email">이메일</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="dev@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">전화번호</Label>
                      <Input
                        id="phone"
                        defaultValue="010-1234-5678"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    <Button>저장</Button>
                    <Button variant="outline">로그아웃</Button>
                    <Button variant="destructive">
                      회원 탈퇴
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "bookmarks" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl">북마크 관리</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockBookmarks.map((bookmark) => (
                    <Card key={bookmark.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-sm text-gray-600">
                              {bookmark.company}
                            </p>
                            <h3 className="mt-1 mb-3">
                              {bookmark.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              마감일: {bookmark.deadline}
                            </p>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="size-4 text-red-600" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "files" && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>내 파일 관리</CardTitle>
                    <Button
                      onClick={() => setIsFileModalOpen(true)}
                    >
                      <Plus className="mr-2 size-4" />
                      파일 등록
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>구분</TableHead>
                        <TableHead>파일 제목</TableHead>
                        <TableHead>용량</TableHead>
                        <TableHead>등록일</TableHead>
                        <TableHead className="w-20"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockFiles.map((file) => (
                        <TableRow key={file.id}>
                          <TableCell>
                            <Badge variant="secondary">
                              {file.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{file.title}</TableCell>
                          <TableCell>{file.size}</TableCell>
                          <TableCell>
                            {file.uploadedAt}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="size-4 text-red-600" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {activeTab === "experiences" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl">내 경험 관리</h2>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      AI 경험 추출
                    </Button>
                    <Button>저장</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <Card key={exp.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <Input
                              defaultValue={exp.title}
                              className="mb-2"
                              placeholder="경험 제목"
                            />
                            <Input
                              defaultValue={exp.period}
                              placeholder="기간 (YYYY.MM - YYYY.MM)"
                            />
                          </div>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="size-4 text-red-600" />
                          </Button>
                        </div>
                        <Textarea
                          defaultValue={exp.content}
                          rows={4}
                          placeholder="경험 내용을 입력하세요"
                        />
                      </CardContent>
                    </Card>
                  ))}

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      setExperiences([
                        ...experiences,
                        {
                          id: String(experiences.length + 1),
                          title: "",
                          period: "",
                          content: "",
                        },
                      ])
                    }
                  >
                    <Plus className="mr-2 size-4" />
                    경험 추가
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "strategies" && (
              <div className="space-y-4">
                <h2 className="text-xl">포폴 전략 관리</h2>
                <div className="space-y-3">
                  {mockStrategies.map((strategy) => (
                    <Card key={strategy.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 grid grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-600">
                                직무
                              </p>
                              <p className="mt-1">
                                {strategy.role}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">
                                생성일
                              </p>
                              <p className="mt-1">
                                {strategy.createdAt}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">
                                산업 분야
                              </p>
                              <p className="mt-1">
                                {strategy.industry}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() =>
                                navigate(
                                  `/strategy/${strategy.id}`,
                                )
                              }
                            >
                              <Eye className="mr-2 size-4" />
                              보기
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="size-4 text-red-600" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "interviews" && (
              <div className="space-y-4">
                <h2 className="text-xl">면접 결과 관리</h2>
                <div className="space-y-3">
                  {mockInterviews.map((interview) => (
                    <Card key={interview.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-600">
                                포폴 제목
                              </p>
                              <p className="mt-1">
                                {interview.title}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">
                                면접 날짜
                              </p>
                              <p className="mt-1">
                                {interview.interviewDate}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() =>
                                navigate(
                                  `/interview/result/${interview.id}`,
                                )
                              }
                            >
                              <Eye className="mr-2 size-4" />
                              보기
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="size-4 text-red-600" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog
        open={isFileModalOpen}
        onOpenChange={setIsFileModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>파일 등록</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label>파일 업로드</Label>
              <Input type="file" className="mt-2" />
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setIsFileModalOpen(false)}>
                등록
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsFileModalOpen(false)}
              >
                취소
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}