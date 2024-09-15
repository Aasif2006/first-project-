import React from 'react'

function Nextfooter() {
    return (
        <div className='nextfooter'>
            <div className="new">
                <h2>Website Funding Up To 40% Available For All Projects While Funding Lasts.
                    Get In Touch Today!</h2>
                <p className='how'>Follow us for latest deals and offers</p>
                <p className='who'>@websolutions @websitefunding</p>
                <p className='who'>@smallbusinesswebsitedesign</p>
            </div>
            <div className="for">
                <form action="">
                    <label htmlFor="to">Name</label>
                    <input type="text" id='to' required />

                    <label htmlFor="tel">Email</label>
                    <input type="email" id='tel' required />

                    <label htmlFor="tell">Telephone</label>
                    <input type="text" id='tell' required />

                    <label htmlFor="tool">Business Name</label>
                    <input type="text" id='tool' required /> 
                 <input type="submit"  value="next"/>
                </form>
            </div>
        </div>
    )
}

export default Nextfooter