import { useState } from 'react';

const useCloseModal = ({ status, setStatus }: { status: boolean; setStatus: (status: boolean) => void }): [boolean, () => void] => {
    const [tempModalStatus, setTempModalStatus] = useState<boolean>(status);
    const onClose = () => {
        setTempModalStatus(false);

        setTimeout(() => {
            setStatus(false);
        }, 250);
    };

    return [tempModalStatus, onClose];
};

export default useCloseModal;
