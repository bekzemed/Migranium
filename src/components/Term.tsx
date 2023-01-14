const Term = ({ text }: any) => {
  return (
    <div className="mb-10">
      <ul className="flex items-center mb-2 list-disc list-inside">
        <li>{text}</li>
      </ul>
    </div>
  );
};

export default Term;
