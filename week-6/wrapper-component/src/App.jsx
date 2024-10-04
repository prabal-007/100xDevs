

function App() {

  return (
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <CardWrapper>
        <div>
        Hi There1
        </div>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({ childern }) {
  return <div style={{ border: "2px solid black", height: '100px', width: '100px' }}>
    {childern}
  </div>
}

function TextComponent() {
  return <div>
    Hi there!
  </div>
}

export default App
