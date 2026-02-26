import { MyPageLayout } from '../../components/MyPageLayout';
import { Trash2, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { mockFiles } from '../../data/mockData';

function FileUploadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>

        <h2 className="mb-6">파일 등록</h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-2">구분</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>이력서</option>
              <option>포트폴리오</option>
              <option>기타</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">파일 제목</label>
            <input
              type="text"
              placeholder="파일 제목을 입력하세요"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-2">파일 선택</label>
            <input
              type="file"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors">
            등록
          </button>
        </div>
      </div>
    </div>
  );
}

export function FilesPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <MyPageLayout>
      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <h2>내 파일 관리</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={18} />
            파일 등록
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4">구분</th>
                <th className="text-left py-3 px-4">파일 제목</th>
                <th className="text-left py-3 px-4">용량</th>
                <th className="text-left py-3 px-4">등록일</th>
                <th className="text-center py-3 px-4">관리</th>
              </tr>
            </thead>
            <tbody>
              {mockFiles.map((file) => (
                <tr key={file.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">{file.type}</td>
                  <td className="py-4 px-4">{file.title}</td>
                  <td className="py-4 px-4 text-gray-600">{file.size}</td>
                  <td className="py-4 px-4 text-gray-600">{file.uploadedAt}</td>
                  <td className="py-4 px-4 text-center">
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {mockFiles.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            등록된 파일이 없습니다.
          </div>
        )}
      </div>

      <FileUploadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </MyPageLayout>
  );
}
