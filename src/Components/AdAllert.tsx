import { useEffect, useState } from 'react';

interface AdAllertInterface {
    title: string,
    description: string,
    show: boolean,
    onPress: Function

}
const timeOut = (ms: number): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        setTimeout((() => { resolve(); }), ms)
    });
};

let canLoop = true;
export default function App(props: AdAllertInterface) {
    const [top, setTop] = useState<string>('');
    const [show, setShow] = useState<boolean>(props.show);

    useEffect(()=>{
        setShow(props.show);
    },[props.show])

    return (
        <div className={`absolute flex z-50 backdrop-blur-sm bg-black/80 justify-center ${props.show ? '' : 'hidden'}`} style={{ width: "100%", height: "100%" }} onClick={() => { props.onPress() }}>
            <div className={`relative flex items-center flex-col justify-center w-96 h-28 bg-green-900 rounded-lg shadow-lg shadow-green-500/50 mt-5 transition-all duration-700`}>
                <p className='font-semibold'><strong>Pro Tip</strong> - Page is responsive : )</p>
                <small>Click <strong>anywhere</strong> to continue.</small>
            </div>
        </div>
    )

}