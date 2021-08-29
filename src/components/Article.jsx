import MinutesToRead from "./MinutesToRead";

function Article({ title, preview, minutes, date = "January 1, 1970" }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small> <MinutesToRead minutes={minutes} />
      <p>{preview}</p>
    </article>
  )
}

export default Article;