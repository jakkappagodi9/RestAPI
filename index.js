// Grab elements
let url = 'https://crudcrud.com/api/3de6894811874a8f8be6d4fcd55c92c8/voting';
const totalVotes = document.getElementById('totalVotes');
const candidateOnetotalVotes = document.getElementById('candidateOneDisplay');
const firstCandidate = document.getElementById('firstCandidate');
const candidateTwototalVotes = document.getElementById('candidateTwoDisplay');
const secondCandidate = document.getElementById('secondCandidate');
const candidateThreetotalVotes = document.getElementById(
  'candidateThreeDisplay'
);
const thirdCandidate = document.getElementById('thirdCandidate');

function handleForm(event) {
  event.preventDefault();
  const votingDetails = {
    condidateName: event.target.candidate.value,
    studentName: event.target.studentName.value,
  };
  axios
    .post(url, votingDetails)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  const form = document.getElementById('votingform');
  form.reset();
  location.reload();
}
window.addEventListener('DOMContentLoaded', display);
function display() {
  axios
    .get(url)
    .then((res) => {
      //Displaying the total Votes
      totalVotes.innerText = `Total Votes : ${res.data.length}`;

      //displaying the total vote of First candidate
      let candidateOneVoters = res.data.filter(
        (val) => val.condidateName == 'Suresh'
      );
      console.log(candidateOneVoters);
      candidateOnetotalVotes.innerText = ` Total : ${candidateOneVoters.length}`;
      for (let i = 0; i < candidateOneVoters.length; i++) {
        let firstListItems = document.createElement('p');
        firstListItems.innerText = `${candidateOneVoters[i].studentName}`;
        let deletebtn = document.createElement('button');
        deletebtn.setAttribute('id', 'deletebtn');
        deletebtn.innerText = 'Delete';
        deletebtn.addEventListener('click', function () {
          console.log(candidateOneVoters[i]._id);
          axios
            .delete(`${url}/${candidateOneVoters[i]._id}`)
            .then((res) => {
              console.log('Voter deleted from suresh');
              location.reload();
            })
            .catch((error) => console.log(error));
        });
        firstListItems.appendChild(deletebtn);
        firstCandidate.append(firstListItems);
      }

      //Displaying total votes of second candidate
      let candidateTwoVoters = res.data.filter(
        (val) => val.condidateName == 'Abhishek'
      );
      console.log(candidateTwoVoters);
      candidateTwototalVotes.innerText = ` Total : ${candidateTwoVoters.length}`;
      for (let i = 0; i < candidateTwoVoters.length; i++) {
        let secondListItems = document.createElement('p');
        secondListItems.innerText = `${candidateTwoVoters[i].studentName}`;
        let deletebtn = document.createElement('button');
        deletebtn.setAttribute('id', 'deletebtn');
        deletebtn.innerText = 'Delete';
        deletebtn.addEventListener('click', function () {
          console.log(candidateTwoVoters[i]._id);
          axios
            .delete(`${url}/${candidateTwoVoters[i]._id}`)
            .then((res) => {
              console.log('Voter deleted from suresh');
              location.reload();
            })
            .catch((error) => console.log(error));
        });
        secondListItems.appendChild(deletebtn);
        secondCandidate.append(secondListItems);
      }

      //Displaying total votes of third candidate
      let candidateThreeVoters = res.data.filter(
        (val) => val.condidateName == 'Kavya'
      );
      console.log(candidateThreeVoters);
      candidateThreetotalVotes.innerText = ` Total : ${candidateThreeVoters.length}`;
      for (let i = 0; i < candidateThreeVoters.length; i++) {
        let thirdListItems = document.createElement('p');
        thirdListItems.innerText = `${candidateThreeVoters[i].studentName}`;
        let deletebtn = document.createElement('button');
        deletebtn.setAttribute('id', 'deletebtn');
        deletebtn.innerText = 'Delete';
        deletebtn.addEventListener('click', function () {
          console.log(candidateThreeVoters[i]._id);
          axios
            .delete(`${url}/${candidateThreeVoters[i]._id}`)
            .then((res) => {
              console.log('Voter deleted from suresh');
              location.reload();
            })
            .catch((error) => console.log(error));
        });
        thirdListItems.appendChild(deletebtn);
        thirdCandidate.append(thirdListItems);
      }
    })
    .catch((error) => console.log(error));
}
