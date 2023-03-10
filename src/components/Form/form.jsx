import { useState } from 'react';
import './Form.css';

function Form() {
  const [sourceModifierTableFile, setSourceModifierTableFile] = useState(null);
  const [visibility, setVisibility] = useState('public');
  const [submissionCategory, setSubmissionCategory] = useState('sequenced by submitter');
  const [submissionReleaseDate, setSubmissionReleaseDate] = useState('');
  const [sequenceMoleculeType, setSequenceMoleculeType] = useState('');
  const [sequencingTechnology, setSequencingTechnology] = useState('');
  const [researchDefinition, setResearchDefinition] = useState("");
  const [sequenceAuthors, setSequenceAuthors] = useState({ firstName: "", lastName: "" });
  const [publicationStatus, setPublicationStatus] = useState({ referenceTitle: "", status: "" });
  const [contact, setContact] = useState({ firstName: "", lastName: "", email: "" });


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({
      researchDefinition,
      sequenceAuthors,
      publicationStatus,
      contact,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="sourceModifierTableFile">Source Modifiers (upload source modifier table file)</label>
        <input type="file" id="sourceModifierTableFile" onChange={(event) => setSourceModifierTableFile(event.target.files[0])} />
      </div>
      <div>
        <label htmlFor="visibility">Visibility</label>
        <select id="visibility" value={visibility} onChange={(event) => setVisibility(event.target.value)}>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
      <div>
        <label>Submission category</label>
        <div>
          <label htmlFor="sequencedBySubmitter">
            <input type="radio" id="sequencedBySubmitter" name="submissionCategory" value="sequenced by submitter" checked={submissionCategory === 'sequenced by submitter'} onChange={(event) => setSubmissionCategory(event.target.value)} />
            Sequenced by submitter
          </label>
        </div>
        <div>
          <label htmlFor="derivedFromOtherData">
            <input type="radio" id="derivedFromOtherData" name="submissionCategory" value="derived from other data" checked={submissionCategory === 'derived from other data'} onChange={(event) => setSubmissionCategory(event.target.value)} />
            Derived from other data
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="submissionReleaseDate">Submission release date</label>
        <input type="date" id="submissionReleaseDate" value={submissionReleaseDate} onChange={(event) => setSubmissionReleaseDate(event.target.value)} />
      </div>
      <div>
        <label htmlFor="sequenceMoleculeType">Sequence (molecule type, topology)</label>
        <input type="text" id="sequenceMoleculeType" value={sequenceMoleculeType} onChange={(event) => setSequenceMoleculeType(event.target.value)} />
      </div>
      <div>
        <label htmlFor="sequencingTechnology">Sequencing technology</label>
        <input type="text" id="sequencingTechnology" value={sequencingTechnology} onChange={(event) => setSequencingTechnology(event.target.value)} />
      </div>
      <button type="submit">Submit</button>

      <label>
        Research definition
        <input type="text" value={researchDefinition} onChange={(event) => setResearchDefinition(event.target.value)} />
      </label>

      <label>
        Sequence authors (first name, last name)
        <input
          type="text"
          value={sequenceAuthors.firstName}
          onChange={(event) => setSequenceAuthors((prevState) => ({ ...prevState, firstName: event.target.value }))}
          placeholder="First Name"
        />
        <input
          type="text"
          value={sequenceAuthors.lastName}
          onChange={(event) => setSequenceAuthors((prevState) => ({ ...prevState, lastName: event.target.value }))}
          placeholder="Last Name"
        />
      </label>

      <label>
        Publication status (reference title, status)
        <input
          type="text"
          value={publicationStatus.referenceTitle}
          onChange={(event) =>
            setPublicationStatus((prevState) => ({ ...prevState, referenceTitle: event.target.value }))
          }
          placeholder="Reference Title"
        />
        <input
          type="text"
          value={publicationStatus.status}
          onChange={(event) => setPublicationStatus((prevState) => ({ ...prevState, status: event.target.value }))}
          placeholder="Status"
        />
      </label>

      <label>
        Contact (first name, last name, email)
        <input
          type="text"
          value={contact.firstName}
          onChange={(event) => setContact((prevState) => ({ ...prevState, firstName: event.target.value }))}
          placeholder="First Name"
        />
        <input
          type="text"
          value={contact.lastName}
          onChange={(event) => setContact((prevState) => ({ ...prevState, lastName: event.target.value }))}
          placeholder="Last Name"
        />
        <input
          type="email"
          value={contact.email}
          onChange={(event) => setContact((prevState) => ({ ...prevState, email: event.target.value }))}
          placeholder="Email"
        />
      </label>

      <button type="submit">Submit</button>




      
    </form>
  );
}
export default Form;