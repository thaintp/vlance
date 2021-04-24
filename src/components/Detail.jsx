import "./style.scss";

const Detail = ({ job }) => {
  return (
    <div className="detail">
      <h2 className="detail__title">{job.name}</h2>
      <div className="detail__expected">{job.expect_balance?.join(" - ")}</div>
      <div className="detail__overview">{job.overview}</div>
      <div className="detail__description">{job.description}</div>
    </div>
  );
};

export default Detail;
