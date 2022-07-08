
const uriCards = 'http://13.38.8.44/api/posts?populate=*'
const domain = 'http://13.38.8.44'

function Projects({data}){
  let posts = data.data
  return(
    <div className="flex justify-between m-5">
      {posts.map(post => (
        <div className="relative">
            {/* <p>{post.attributes.description}</p>   */}
            <div
              className="h-72 w-96 bg-center bg-cover"
              style={{backgroundImage: `url(${domain+post.attributes.image.data.attributes.url})`}}>
          <li className="post-title to-fade-out" key={post.id}>{post.attributes.title}
          </li>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Projects 