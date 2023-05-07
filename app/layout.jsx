import '@styles/globals.css';

export const metadata= {
  title: 'PromptDB',
  description: 'share & store AI prompts'

}
const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout