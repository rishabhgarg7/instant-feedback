import React, {useState} from 'react'
import AppPageLayout from '../src/components/Layout/AppPageLayout'

export default function Sites() {
    const [site, setSite] = useState('')
    const [website, setWebsiite] = useState('')

    const handleSiteChange = (evt) => {
        setSite(evt.target.value)
    }
    const handleWebsiteChange = (evt) => {
        setWebsiite(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        //do something here
    }
    return (
        <AppPageLayout>
            <div>
                <h5>Sites</h5>
                <h1 className='mt-2 text-4xl font-bold'>My sites</h1>
                <iframe src='https://fastfeedback.io/embed/BLspD6y8Bfn73LLm7nvW/style-guides-component-libraries-design-systems' />
                <iframe src='https://react2025.com' className='p-1 rounded-lg w-64 bg-gray-400 '/>
                <div className='add-site-form mt-4 mx-auto w-1/3 flex justify-center items-center bg-white rounded-lg'>
                    <form className='flex flex-col p-4' onSubmit={handleSubmit}>
                        <label htmlFor="site-name" className="block uppercase tracking-wide text-gray-500 text-xs font-bold">
                            Site Name
                        </label>
                        <input value={site} onChange={handleSiteChange} disabled={false} name="site-name" className="mt-1 p-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-gray-900 appearance-none" type="text" id="site-name" placeholder="Name of the site" />
                        <label htmlFor="website" className="mt-6 block uppercase tracking-wide text-gray-500 text-xs font-bold">
                            Website url
                        </label>
                        <input value={website} onChange={handleWebsiteChange} name="website" className="mt-1 p-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-gray-900 appearance-none" type="text" id="website" placeholder="https://website.com" />
                        <button type='submit' className='mt-2 p-2 appearance-none rounded-xl border-2 border-gray-600 hover:bg-black hover:text-white focus:bg-black focus:text-white hover:font-bold focus:outline-none focus:ring-1 focus:border-gray-900'>Add site</button>
                    </form>
                </div>
            </div>
        </AppPageLayout>

    )
}
