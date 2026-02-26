import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Eye, FileText, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import { mockInterviews, mockStrategies } from '../data/mockData';

export function InterviewCreationPage() {
  const navigate = useNavigate();
  const [isStrategySelectOpen, setIsStrategySelectOpen] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<typeof mockStrategies[0] | null>(null);

  const handleStartInterview = () => {
    if (selectedStrategy) {
      navigate('/interview/progress/1');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Interview History */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="size-5 text-blue-600" />
                  면접 히스토리
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {mockInterviews.map((interview) => (
                  <button
                    key={interview.id}
                    onClick={() => navigate(`/interview/result/${interview.id}`)}
                    className="w-full p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm line-clamp-1">{interview.title}</span>
                      <Eye className="size-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500">{interview.interviewDate}</p>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>AI 모의 면접</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Instructions */}
                <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                  <h3 className="flex items-center gap-2">
                    <FileText className="size-5 text-blue-600" />
                    진행 방법
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">1.</span>
                      <span>생성한 포트폴리오 전략을 선택합니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">2.</span>
                      <span>선택한 전략을 기반으로 AI가 맞춤형 면접 질문을 생성합니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">3.</span>
                      <span>각 질문당 1분의 답변 시간이 주어집니다</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">4.</span>
                      <span>총 5~7개의 질문이 제공되며, 답변 완료 후 평가를 받을 수 있습니다</span>
                    </li>
                  </ul>
                </div>

                {/* Strategy Selection */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3>포트폴리오 전략 선택</h3>
                    <Button onClick={() => setIsStrategySelectOpen(true)}>
                      <FileText className="mr-2 size-4" />
                      포폴 선택
                    </Button>
                  </div>

                  {selectedStrategy && (
                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge>{selectedStrategy.role}</Badge>
                              <Badge variant="outline">{selectedStrategy.industry}</Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              생성일: {selectedStrategy.createdAt}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            onClick={() => navigate(`/strategy/${selectedStrategy.id}`)}
                          >
                            <Eye className="mr-2 size-4" />
                            상세보기
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Start Button */}
                <div className="pt-6">
                  <Button
                    className="w-full h-14 text-base"
                    disabled={!selectedStrategy}
                    onClick={handleStartInterview}
                  >
                    <Play className="mr-2 size-5" />
                    면접 시작하기
                  </Button>
                  {!selectedStrategy && (
                    <p className="text-xs text-center text-gray-500 mt-2">
                      포트폴리오 전략을 선택해주세요
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Strategy Selection Modal */}
      <Dialog open={isStrategySelectOpen} onOpenChange={setIsStrategySelectOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>포트폴리오 전략 선택</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-4">
            {mockStrategies.map((strategy) => (
              <button
                key={strategy.id}
                onClick={() => {
                  setSelectedStrategy(strategy);
                  setIsStrategySelectOpen(false);
                }}
                className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge>{strategy.role}</Badge>
                      <Badge variant="outline">{strategy.industry}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">생성일: {strategy.createdAt}</p>
                  </div>
                  <Eye className="size-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
