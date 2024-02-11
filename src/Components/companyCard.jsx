import Tag from "./Tag";
function CompanyCard() {

    return (

<div className=" bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 sm:col-span-1 col-span-2 h-fit">
    <a href="#">
        <img className="rounded-t-lg" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Amazon - India</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Banglore/Hyderabad/Nodia <br/>SWE 2 <br/> 30k to 45k</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <br />
        <hr className="my-2"/>
        <span className="mt-2" />
        <Tag text="2003"/><Tag text="2005"/><Tag text="2006"/>
    </div>
</div>

    )
}

export default CompanyCard;