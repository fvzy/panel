import React, { useState } from 'react';
import useEventListener from '@/plugins/useEventListener';
import SearchModal from '@/components/dashboard/search/SearchModal';
import tw from 'twin.macro';
import { SearchIcon } from '@heroicons/react/solid';

export default () => {
    const [visible, setVisible] = useState(false);

    useEventListener('keydown', (e: KeyboardEvent) => {
        if (['input', 'textarea'].indexOf(((e.target as HTMLElement).tagName || 'input').toLowerCase()) < 0) {
            if (!visible && e.metaKey && e.key.toLowerCase() === '/') {
                setVisible(true);
            }
        }
    });

    return (
        <>
            {visible && <SearchModal appear visible={visible} onDismissed={() => setVisible(false)} />}
            <div className={'navigation-link'} onClick={() => setVisible(true)} css={tw`hidden! md:flex!`}>
                <SearchIcon css={tw`w-5 h-5`} />
            </div>
        </>
    );
};
