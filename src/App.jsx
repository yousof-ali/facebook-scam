
import './App.css'

function App() {

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
      email, password
    }
    console.log(userData)
  }

  return (
    <>
      <div className='md:h-[700px] bg-[#F0F2F5]'>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row w-full md:gap-32 gap-10 ">
            <div className="text-center lg:text-left">
              <h1 className='text-6xl font-bold text-[#1C68FA] mb-5'>facebook</h1>
              <p className="text-2xl">Facebook helps you connect and share <br /> with the people in your life.</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <input name='email' type="email" placeholder="Email address or phone number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <input className="bg-[#1c68FA] py-3 rounded-md font-bold text-2xl text-white" type="submit" value="Log in" />
                  <label className="mt-3 text-center">
                    <a href="#" className="text-blue-600 ">Forgot password?</a>
                  </label>
                </div>
                <div className="divider"></div>
                <div className='text-center'>
                  <button className="bg-[#3FA430] w-2/3 py-3 rounded-md font-bold text-xl text-white">Create new account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
