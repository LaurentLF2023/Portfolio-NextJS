function Contact(){
    return(
        <div className="border-solid border-t-8 border-t-black mt-8 mb-8 w-full">
                <h3 className="my-5 ml-8 text-7xl font-bold">.Contact</h3>
            <div className="flex justify-center">
                <form className='form flex flex-col justify-center'>
                    <input className='m-2' type="email" placeholder="Your email"/>
                    <input className='m-2' type="text" placeholder="Object"/>
                    <textarea className='m-2' type='text-field' rows="7" placeholder="What do you want to tell to me?"/>
                    <button >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact