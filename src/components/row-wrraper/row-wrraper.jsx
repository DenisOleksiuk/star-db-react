import './row-wrraper.css'

const Row = (({left, right}) => {
  return (
    <div className="row mb2 people__page">
        <div className="col-md-6">
         {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
    </div>
  )
});

export default Row;
