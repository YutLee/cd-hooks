import useScroll from '..'

export default () => {
  useScroll(document.getElementById('use-scroll'), (position) => {
    console.log(position)
    return true
  })

  return (
    <div id="use-scroll" style={{height: '100px', overflow: 'auto'}}>
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
      滚动内容<br />
    </div>
  )
}
