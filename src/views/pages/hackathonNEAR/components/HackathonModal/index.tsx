import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'views/components/Button';
import { Modal } from 'views/components/Modal';

type HackathonModalStatus = 'error' | 'success';

const titles: Record<HackathonModalStatus, string> = {
  success: 'Successful!',
  error: 'Error!',
};

const subTitles: Record<HackathonModalStatus, string> = {
  success: 'Insert sample sentence here',
  error: 'Insert sample sentence here',
};

interface HackathonModalProps {
  onClose: () => void;
  status?: HackathonModalStatus;
}

export const HackathonModal: React.FC<HackathonModalProps> = ({ onClose, status = 'success' }) => {
  const navigate = useNavigate();
  const onProceedClick = useCallback(() => {
    navigate('/profile');
  }, [navigate]);
  return (
    <Modal title={titles[status]} subtitle={subTitles[status]} onClose={onClose}>
      {status === 'success' && (
        <Button size="large" onClick={onProceedClick}>
          Click here to continue
        </Button>
      )}
    </Modal>
  );
};
