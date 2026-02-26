import { X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-center mb-2">로그인</h2>
        <p className="text-center text-gray-600 mb-8">
          간편하게 로그인하고 서비스를 이용하세요
        </p>

        <button
          onClick={() => {
            onLogin();
            onClose();
          }}
          className="w-full py-4 bg-[#FEE500] text-[#000000] rounded-xl hover:bg-[#FDD835] transition-colors flex items-center justify-center gap-2"
        >
          <span className="text-xl">💬</span>
          카카오 로그인
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          소셜 계정으로 간편하게 3초만에 가입하세요
        </p>
      </div>
    </div>
  );
}
