import React, { useState } from 'react';
import EditSubuserModal from '@/components/server/users/EditSubuserModal';
import { Button } from '@/components/elements/button/index';
import tw from 'twin.macro';
import { UserAddIcon } from '@heroicons/react/solid';

export default () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <EditSubuserModal visible={visible} onModalDismissed={() => setVisible(false)} />
            <Button onClick={() => setVisible(true)}>
                <UserAddIcon css={tw`w-5 h-5 inline-block vertical-align[sub] mr-2`} />
                New User
            </Button>
        </>
    );
};
