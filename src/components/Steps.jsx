import Step from './Step';

const tags = [
  'Account',
  'Verification',
  'Verified',
  'Bank Details',
  'Upload ID',
  'Finish'
];

function Steps({ count }) {
  return (
    <div className="steps">
      {tags.map((tag, index) => (
        <Step tag={tag} index={index} key={index} count={count} />
      ))}
    </div>
  );
}

export default Steps;
