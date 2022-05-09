import { Button } from '@/components/common';
import { PageLayout } from '@/components/layout';
import { modalSelector } from '@/store/modalAtom';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

function HomePage() {
  const [modal, setModal] = useRecoilState(modalSelector);

  const openSignInModal = () => {
    setModal({
      name: 'SIGNIN',
      title: 'Sign in',
    });
  };

  const openSignUpModal = () => {
    setModal({
      name: 'SIGNUP',
      title: 'Sign up',
    });
  };

  return (
    <PageLayout>
      <h1>Home Page</h1>
      <div className="h-20 space-x-2">
        <Button onClick={openSignInModal}>SignIn</Button>
        <Button onClick={openSignUpModal}>SignUp</Button>
      </div>
      <div>
        <Link to="/spec">
          <Button>Go to Spec</Button>
        </Link>
      </div>
    </PageLayout>
  );
}

export default HomePage;
