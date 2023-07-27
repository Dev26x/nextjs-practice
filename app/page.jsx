import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
         Prompta is an open-source Ai-prompting tool that allows users create,
         discover and share creative prompts.
      </p>

      <Feed />
      
    </section>
  )
}

export default Home