function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const openNewWindow = (): void => {
    window.electron.ipcRenderer.send('create-pomodoro-window')
  }

  return (
    <div>
      <h1>Main Window</h1>
      <button onClick={openNewWindow}>Open Pomodoro Window</button>
    </div>
  )
}

export default App
