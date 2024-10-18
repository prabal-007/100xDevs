import { useState } from "react"
import { isRecoilValue, RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { JobsCount, MessagesCount, NetworkCount, NotificationsCount } from "./atoms"

function App() {

  return (
    <>
      <RecoilRoot>
        <MainComponent />
      </RecoilRoot>
    </>
  )
}

function MainComponent() {
  const network = useRecoilValue(NetworkCount)
  const [jobs, setJobsCount] = useRecoilState(JobsCount)
  const message = useRecoilValue(MessagesCount)
  const notification = useRecoilValue(NotificationsCount)
  return <div>
    <button>Home</button>
    <button>My Network {network}</button>
    <button>Jobs {jobs}</button>
    <button>Messages {message}</button>
    <button>Notigicaions ({notification < 100 ? notification : '99+'})</button>
    <button>Me</button>

    <button onClick={() => {
      setJobsCount(jobs + 1);
    }}>
          Increace count
        </button>
  </div>
}

export default App


