let papers = [
  {
    id: 1,
    title: "Artificial Intelligence in Healthcare",
    authors: "John Doe, Jane Smith",
    year: 2020,
    citations: 120,
  },
  {
    id: 2,
    title: "Blockchain Technology and its Applications",
    authors: "Alice Johnson, Robert Brown",
    year: 2021,
    citations: 90,
  },
  {
    id: 3,
    title: "Advancements in Quantum Computing",
    authors: "Richard Feynman, John Wheeler",
    year: 2019,
    citations: 150,
  },
  {
    id: 4,
    title: "Climate Change and Environmental Impact",
    authors: "Rachel Carson, David Attenborough",
    year: 2018,
    citations: 200,
  },
  {
    id: 5,
    title: "Machine Learning in Autonomous Vehicles",
    authors: "Elon Musk, Peter Thiel",
    year: 2022,
    citations: 180,
  },
  {
    id: 6,
    title: "COVID-19 Vaccine Development",
    authors: "Anthony Fauci, Sarah Gilbert",
    year: 2021,
    citations: 250,
  },
  {
    id: 7,
    title: "Augmented Reality in Education",
    authors: "Jane Doe, Samuel Lee",
    year: 2020,
    citations: 140,
  },
  {
    id: 8,
    title: "The Future of Renewable Energy",
    authors: "Greta Thunberg, Michael Moore",
    year: 2021,
    citations: 110,
  },
  {
    id: 9,
    title: "The Role of Big Data in Finance",
    authors: "John McAfee, Tim Berners-Lee",
    year: 2019,
    citations: 130,
  },
  {
    id: 10,
    title: "Ethics of Artificial Intelligence",
    authors: "Nick Bostrom, Eliezer Yudkowsky",
    year: 2020,
    citations: 190,
  },
  {
    id: 11,
    title: "The Impact of 5G on the Internet of Things",
    authors: "Sundar Pichai, Sheryl Sandberg",
    year: 2021,
    citations: 175,
  },
  {
    id: 12,
    title: "Nanotechnology in Cancer Treatment",
    authors: "James Watson, Francis Crick",
    year: 2018,
    citations: 160,
  },
  {
    id: 13,
    title: "Space Exploration and Colonization",
    authors: "Neil Armstrong, Buzz Aldrin",
    year: 2020,
    citations: 210,
  },
  {
    id: 14,
    title: "Artificial Intelligence in Autonomous Drones",
    authors: "Sergey Brin, Larry Page",
    year: 2019,
    citations: 140,
  },
  {
    id: 15,
    title: "The Evolution of Robotics",
    authors: "Isaac Asimov, Ray Kurzweil",
    year: 2022,
    citations: 175,
  },
];
let savedPapers = [];
const errorHandle = (err) => {
  return err.message;
};
module.exports.getPapers = async (req, res) => {
  try {
    let { title, author, publishYear, citationCount } = req.body;
    if (!title) title = "";
    if (!author) author = "";
    if (!publishYear) publishYear = "";
    if (!citationCount) citationCount = "";

    // Usually you would query a DB here like MongoDB or mySQL, but i will simply be checking against my local hard coded list of papers

    const filteredPapers = papers.filter((paper) => {
      // Filtering the content server side (Also done client side since less data)
      const titleMatch = paper.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const authorMatch = paper.authors
        .toLowerCase()
        .includes(author.toLowerCase());
      const publishYearMatch = () => {
        if (publishYear) return publishYear === paper.year;
        return true;
      };
      const citationCountMatch = () => {
        if (citationCount) return citationCount === paper.citations;
        return true;
      };
      return (
        titleMatch && authorMatch && publishYearMatch() && citationCountMatch()
      );
    });
    res.status(200).send({
      papers: filteredPapers,
    });
  } catch (err) {
    const message = errorHandle(err);
    res.status(400).send(message);
  }
};

module.exports.getSavedPapers = async (req, res) => {
  try {
    res.status(200).send({ paper: savedPapers });
  } catch (err) {
    const message = errorHandle(err);
    res.status(400).send(message);
  }
};

module.exports.savePaper = async (req, res) => {
  try {
    const paper = req.body;
    // Verifying Paper Details
    if (
      !paper.title ||
      !paper.title ||
      !paper.authors ||
      !paper.citations ||
      !paper.year
    )
      throw new Error("Incomplete info");
    // Checking for duplicates
    let check = true;
    for (let i = 0; i < savedPapers.length; i++) {
      if (savedPapers[i].id === paper.id) {
        check = false;
        break;
      }
    }
    if (check) savedPapers.push(paper);
    console.log(savedPapers);
    res.status(200).send({ paper: savedPapers });
  } catch (err) {
    const message = errorHandle(err);
    res.status(400).send(message);
  }
};
module.exports.deleteSaved = async (req, res) => {
  // Deleting based on id
  const { id } = req.body;
  savedPapers = savedPapers.filter((savedPaper) => {
    if (id !== savedPaper.id) return savedPaper;
  });
  res.status(200).send({ paper: savedPapers });
};
