const lectures = [
	{
		'code':'EXA-ADKR',
		'name':'Mendel English Club'
	},
	{
		'code':'TIA',
		'name':'Theoretical Informatics'
	},
	{
		'code':'ENA-NSS',
		'name':'Software and Services Deployment',
	},
	{
		'code':'ENA-SU',
		'name':'Machine Learning',
	},
	{
		'code':'NSAA',
		'name':'Neural Networks in Applications',
	}
]

function execute(){
	const teamCards = document.querySelectorAll(".team-card")
	console.log(teamCards)
	teamCards.forEach(team => {
		const teamCode = team.querySelector(".team-name").innerText
		const instance = lectures.find(lecture => teamCode.includes(lecture.code))

		// append lecture name
		const node = document.createElement("h3");
		const textNode = document.createTextNode(instance.name);
		node.appendChild(textNode)
		team.appendChild(textNode)
	})
}
setTimeout(execute, 5000)
// execute()
