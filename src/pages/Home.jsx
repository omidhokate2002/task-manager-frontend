import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className='bg-primary text-white h-[91%] py-8 text-center flex flex-col justify-center items-center' style={{ backgroundImage: 'url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className='text-4xl font-bold mb-4'> Welcome to Task Management App</h1>
            <p className='text-xl mb-6'>Organize your tasks effortlessly and boost your productivity</p>
            <Link to="/signup" className='mt-10 text-xl block bg-white text-primary py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300'>
              <span>Join now to manage your tasks</span>
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        ) : (
          <>
              <h1 className='text-2xl font-bold mt-8 mx-8 border-b border-b-gray-300 pb-2'>Welcome {authState.user.name}</h1>
              <div className='mx-8 mt-4'>
                <Tasks />
              </div>
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home;
