-- Semesters Table
CREATE TABLE semesters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL -- Example: 'First Semester', 'Second Semester'
);

-- Subjects Table
CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    semester_id INT REFERENCES semesters(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL, -- Example: 'Mathematics', 'Physics'
  
);

-- Question Papers Table
CREATE TABLE question_papers (
    id SERIAL PRIMARY KEY,
    subject_id INT REFERENCES subjects(id) ON DELETE CASCADE,
    year INT NOT NULL, -- Example: 2022, 2023, 2024
    paper_url TEXT NOT NULL, -- URL or file path to the question paper PDF
);

-- Notes Table
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    subject_id INT REFERENCES subjects(id) ON DELETE CASCADE,
    note_title VARCHAR(255) NOT NULL,
    note_url TEXT NOT NULL, -- URL or file path to the note PDF
  
);

-- Insert data for the first two semesters
INSERT INTO semesters (name) VALUES ('Semester 1'), ('Semester 2');

-- Example subjects for First Semester (id=1) and Second Semester (id=2)
INSERT INTO subjects (semester_id, name) 
VALUES 
    (1, 'Kannada : Manujamatha-1 '),
    (1, 'English : Aspirations and course Book Paper-1 '),
    (1, 'Fundamentals Of Computer'),
    (1, 'Programming in C'),
    (1, 'Mathematical Foundation'),
    (1, 'Environmental Studies'),
    (1, 'OE Introduction to Gender Studies'),
    (2, 'Kannada : Manujamatha-2'),
    (2, 'English : Aspirations and course Book Paper-2'),
    (2, 'Object Oriented Concepts using Java'),
    (2, 'Data Structures Using C'),
    (2, 'Discrete Mathematical Structures'),
    (2, 'Digital Fluency'),
    (2, 'OE : Indian Polity, Issues and concerns');


-- Example question papers for a subject
INSERT INTO question_papers (subject_id, year, paper_url) 
VALUES 
    (1, 2022, 'http://example.com/math101_2022.pdf'),
    (1, 2023, 'http://example.com/math101_2023.pdf'),
    (1, 2024, 'http://example.com/math101_2024.pdf');

-- Example notes for a subject
INSERT INTO notes (subject_id, note_title, note_url) 
VALUES 
    (1, 'All Chapters', 'http://example.com/algebra_notes.pdf'),
    (2, 'The Boy, I and Time', ''),
    (2, 'On Television', ''),
    (2, 'A Piece of Advice', ''),
    (2, 'Once Upon a Time', ''),
    (2, 'The World As I See It', ''),
    (2, 'An Ode to Makeup', ''),
    (2, 'The Man Who Redefined Digital Age', ''),
    (2, 'The Rightful Inheritors of the Earth', ''),
    (2, '', ''),
