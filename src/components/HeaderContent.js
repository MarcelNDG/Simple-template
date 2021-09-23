import React from 'react'





const HeaderContent = () => {
    return (
        <>
            <h1 className='topLogo'>LOGO</h1>
            <div className='headerWrap'>
                <ul className='headerBtnList'>
                    <li className='headerBtn'>Item</li>
                    <li className='headerBtn'>Item</li>
                    <li className='headerBtn'>Item</li>
                    <li className='headerBtn'>Item</li>

                </ul>
                <div className='headerOptionsWrap'>
                    <div className='headerBtnList'>
                        <button>Button</button>
                    </div>                    
                </div>
                
            </div>
        </>
    )
}

export default HeaderContent
