import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'views/components/Button';
import { Modal } from 'views/components/Modal';

export type HackathonModalStatus = 'error' | 'success';

const titles: Record<HackathonModalStatus, string> = {
  success: 'Successful!',
  error: 'Error!',
};

const subTitles = (message: string): Record<HackathonModalStatus, string> => ({
  success: `Yeeeh! Near says "${message}"!`,
  error: `Oh no. It seems Near is not connected.`,
});

interface HackathonModalProps {
  onClose: () => void;
  status: HackathonModalStatus;
  message: string;
}

export const HackathonModal: React.FC<HackathonModalProps> = ({ onClose, status, message }) => {
  const navigate = useNavigate();
  const onProceedClick = useCallback(() => {
    navigate('/play'); // TODO: change on profile when the page is ready
  }, [navigate]);
  return (
    <Modal title={titles[status]} subtitle={subTitles(message)[status]} onClose={onClose}>
      {status === 'success' && (
        <Button size="large" onClick={onProceedClick}>
          Click here to continue
        </Button>
      )}
    </Modal>
  );
};
