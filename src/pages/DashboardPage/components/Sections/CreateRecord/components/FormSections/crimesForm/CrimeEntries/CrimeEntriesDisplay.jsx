import { BorderedBox } from "../CrimesForm.style";
import EntryCard from "./EntryCard/EntryCard";

const CrimeEntriesDisplay = ({ entries = [], removeEntry = () => {} }) => {
  return (
    <BorderedBox>
      {entries.map((entry) => (
        <EntryCard
          key={entry?.id}
          {...entry}
          removeEntry={removeEntry.bind(null, entry?.id)}
        />
      ))}
    </BorderedBox>
  );
};
export default CrimeEntriesDisplay;
