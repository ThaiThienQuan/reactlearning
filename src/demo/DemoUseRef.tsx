import {useRef} from "react";

export default function DemoUseRef() {
    const firstName=useRef(null);
    return (<>
        <form action="" method="get">
            <div>
                <label htmlFor={'firstName'}></label>
                <input ref={firstName} id={'firstName'} type="text" className={`form-control`}/>
            </div>
        </form>
    </>
)
}