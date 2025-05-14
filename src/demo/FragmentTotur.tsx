import { Fragment } from "react"

export default function FragmentTotur() {
    return (
      <>
      <div> this not in the fragment tag</div>
      <Fragment>
      <div>
        <h1>Title</h1>
         <p>This is a paragraph within a fragment.</p>
      </div>
      </Fragment>
</>
    )
}