import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../redux/userActions'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const navigate = useNavigate();
    const {user, isAuthenticated} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(logout());
      navigate('/');
    }

  return (
    <>
    <div className='flex justify-between py-3 px-4'>
        <div className='pr-4'>
            <Link to='/' ><span className=' text-slate-500 text-3xl font-600' >MLA</span></Link>
        </div>

        {isAuthenticated ? (
           <div className='flex justify-between items-center'>
            <span className='px-1 text-md text-red-400 font-semibold'>Hi, {user?.userName} !</span>
            <button className='px-2.5 py-1 bg-slate-600 text-white mx-1 rounded-md ' onClick={handleLogout}>Logout</button>
          </div>
        
        ): (
        <div className='flex justify-between pr-4'>
            <button className='px-2 py-1 bg-slate-600 text-white mx-1 rounded-md' onClick={() => navigate('/login')}>Login</button>
            <button className='px-2 py-1 bg-slate-600 text-white mx-1 rounded-md' onClick={() => navigate('/register')}>SignUp</button>
        </div>
      )}   
    </div>

    <hr className='w-[100%] '/>
    </>
  )
}

export default Navbar