import img from '../assets/6368592.jpg'

export const Register = () => {
    return (
        <>
            <section>
                <h1>Register</h1>
                <div className="w-full h-full flex justify-center items-center">
                    <div className="">
                        <form>
                            <label htmlFor={'name'}>
                                <input type="text" name="name" placeholder="Name"/>
                            </label>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
