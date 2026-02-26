import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface JobRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JobRequestModal({ isOpen, onClose }: JobRequestModalProps) {
  const [jobLink, setJobLink] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = () => {
    // Handle submission
    console.log({ jobLink, platform });
    onClose();
    setJobLink('');
    setPlatform('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>공고 등록 요청</DialogTitle>
          <DialogDescription>
            분석을 원하는 공고 정보를 입력해주세요
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="job-link">공고 링크</Label>
            <Input
              id="job-link"
              placeholder="https://..."
              value={jobLink}
              onChange={(e) => setJobLink(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <Label htmlFor="platform">플랫폼명</Label>
            <Input
              id="platform"
              placeholder="예: 사람인, 잡코리아, 원티드 등"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleSubmit}>
            제출
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
