-- Semesters Table
CREATE TABLE
    semesters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL 
    );

-- Subjects Table
CREATE TABLE
    subjects (
        id SERIAL PRIMARY KEY,
        semester_id INT REFERENCES semesters (id) ON DELETE CASCADE,
        name VARCHAR(100) NOT NULL, 
    );

-- Question Papers Table
CREATE TABLE
    question_papers (
        id SERIAL PRIMARY KEY,
        subject_id INT REFERENCES subjects (id) ON DELETE CASCADE,
        year INT NOT NULL, 
        paper_url TEXT NOT NULL, 
    );

-- Notes Table
CREATE TABLE
    notes (
        id SERIAL PRIMARY KEY,
        subject_id INT REFERENCES subjects (id) ON DELETE CASCADE,
        note_title VARCHAR(255) NOT NULL,
        note_url TEXT NOT NULL, 
    );

--Updated Tables
 -- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Semesters Table
CREATE TABLE semesters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sem_key SERIAL UNIQUE, -- Auto-increment sem_key for each semester
    name VARCHAR(50) NOT NULL
);

-- Subjects Table
CREATE TABLE subjects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    semester_id UUID REFERENCES semesters (id) ON DELETE CASCADE,
    sem_key INT REFERENCES semesters (sem_key) ON DELETE CASCADE, -- Match semester sem_key
    sub_key SERIAL UNIQUE, -- Auto-increment sub_key for each subject
    name VARCHAR(100) NOT NULL
);

-- Question Papers Table
CREATE TABLE question_papers (
    paper_uuid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subject_id UUID REFERENCES subjects (id) ON DELETE CASCADE,
    sub_key INT REFERENCES subjects (sub_key) ON DELETE CASCADE, -- Match subject sub_key
    paper_year INT NOT NULL CHECK (year >= 2000), -- Example constraint for valid range
    paper_url TEXT NOT NULL
);

-- Notes Table
CREATE TABLE notes (
    note_uuid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subject_id UUID REFERENCES subjects (id) ON DELETE CASCADE,
    sub_key INT REFERENCES subjects (sub_key) ON DELETE CASCADE, -- Match subject sub_key
    note_title VARCHAR(255) NOT NULL,
    note_url TEXT NOT NULL
);



-- Insert data for the first two semesters
INSERT INTO
    semesters (name)
VALUES
    ('Semester 1'),
    ('Semester 2');

-- Example subjects for First Semester (id=1) and Second Semester (id=2)
INSERT INTO
    subjects (sem_key, name)
VALUES
    (1, 'Kannada : Manujamatha-1 '),
    (
        1,
        'English : Aspirations and course Book Paper-1 '
    ),
    (1, 'Fundamentals Of Computer'),
    (1, 'Programming in C'),
    (1, 'Mathematical Foundation'),
    (1, 'Environmental Studies'),
    (1, 'OE Introduction to Gender Studies'),
    (2, 'Kannada : Manujamatha-2'),
    (
        2,
        'English : Aspirations and course Book Paper-2'
    ),
    (2, 'Object Oriented Concepts using Java'),
    (2, 'Data Structures Using C'),
    (2, 'Discrete Mathematical Structures'),
    (2, 'Digital Fluency'),
    (2, 'OE : Indian Polity, Issues and concerns');


INSERT INTO subjects (subject_uuid, semester_uuid, subject_name) VALUES 
(uuid_generate_v4(), 'first-semester-uuid', 'Kannada : Manujamatha-1'), 
(uuid_generate_v4(), 'first-semester-uuid', 'Mathematics I'), 
(uuid_generate_v4(), 'first-semester-uuid', 'Computer Science I'), 
(uuid_generate_v4(), 'first-semester-uuid', 'Physics I'), 
(uuid_generate_v4(), 'first-semester-uuid', 'Chemistry I'), 
(uuid_generate_v4(), 'first-semester-uuid', 'English'), 
(uuid_generate_v4(), 'first-semester-uuid', 'Physical Education'), 
(uuid_generate_v4(), 'second-semester-uuid', 'Mathematics II'), 
(uuid_generate_v4(), 'second-semester-uuid', 'Computer Science II'), 
(uuid_generate_v4(), 'second-semester-uuid', 'Physics II'), 
(uuid_generate_v4(), 'second-semester-uuid', 'Chemistry II'), 
(uuid_generate_v4(), 'second-semester-uuid', 'English II'), 
(uuid_generate_v4(), 'second-semester-uuid', 'Physical Education II');

    ---
    INSERT INTO subjects (subject_uuid ,semester_uuid, subject_name) VALUES 
(  uuid_generate_v4()  'first-semester-uuid', 'Kannada : Manujamatha-1'), 
(  uuid_generate_v4()  'first-semester-uuid', 'English : Aspirations and course Book Paper-1'), 
(  uuid_generate_v4()  'first-semester-uuid', 'Fundamentals Of Computer'), 
(  uuid_generate_v4()  'first-semester-uuid', 'Programming in C'), 
(  uuid_generate_v4()  'first-semester-uuid', 'Mathematical Foundation'), 
(  uuid_generate_v4()  'first-semester-uuid', 'Environmental Studies'), 
(  uuid_generate_v4()  'first-semester-uuid', 'OE Introduction to Gender Studies'), 

(  uuid_generate_v4()  '', 'Kannada : Manujamatha-2'), 
(  uuid_generate_v4()  '', 'English : Aspirations and course Book Paper-2'), 
( uuid_generate_v4()   '', 'Object Oriented Concepts using Java'), 
(  uuid_generate_v4()  '', 'Data Structures Using C'), 
(  uuid_generate_v4()  '', 'Discrete Mathematical Structures'), 
(  uuid_generate_v4()  '', 'Digital Fluency'), 
(  uuid_generate_v4()  '', 'OE : Indian Polity, Issues and concerns');


-- Example question papers for a subject
INSERT INTO
    question_papers (subject_id, year, paper_url)
VALUES
    (1, 2022, 'http://example.com/math101_2022.pdf'),
    (1, 2023, 'http://example.com/math101_2023.pdf'),
    (1, 2024, 'http://example.com/math101_2024.pdf');

-- Example notes for a subject
INSERT INTO
    notes (subject_id, note_title, note_url)
VALUES
    (
        1,
        'All Chapters',
        'http://example.com/algebra_notes.pdf'
    ),
    (2, 'The Boy, I and Time', ''),
    (2, 'On Television', ''),
    (2, 'A Piece of Advice', ''),
    (2, 'Once Upon a Time', ''),
    (2, 'The World As I See It', ''),
    (2, 'An Ode to Makeup', ''),
    (2, 'The Man Who Redefined Digital Age', ''),
    (2, 'The Rightful Inheritors of the Earth', ''),
    (2, '', ''),
INSERT INTO
    question_papers (sub_key, paper_year, paper_url)
VALUES
    (15, 2024, 'https://drive.google.com/file/d/16fV76F3Dt7k8iq4YLVHpyIW6gY4ISeay/view?usp=sharing'),
    (16, 2024, 'https://drive.google.com/file/d/13P1-3oqkQffs1yop6vLvRhogj4cV61dB/view?usp=sharing'),
    (17, 2024, 'https://drive.google.com/file/d/1eQ5fxBOW54EaVjuvBybPka01DGUcf-xB/view?usp=sharing'),
    (18, 2024, 'https://drive.google.com/file/d/10hfoe8GIQ_8v7YhZDgPERFpvjMM86uX0/view?usp=sharing'),
    (19, 2024, 'https://drive.google.com/file/d/1uVevQePhIn0brJQ8v-4_XtYAvznSENVP/view?usp=sharing'),
    (20, 2024, 'https://drive.google.com/file/d/1D64_l1c-fRZebQTrbIAXH4gOwuqhjKT9/view?usp=sharing'),
    (21, 2024, 'https://drive.google.com/file/d/1UQRSRyGbttb5Y30g1kGDvrf1kWNcTkP2/view?usp=sharing');
  

  INSERT INTO
    question_papers (sub_key, paper_year, paper_url)
VALUES
    (22, 2022, 'https://drive.google.com/file/d/1p2xTZE3zF3w7urP1sssZUvQOeV914ton/view?usp=sharing'),
    (23,2022,'https://drive.google.com/file/d/13Hg8IYHYCHmq5EAPtfOreMonagajI_iM/view?usp=sharing'),
    (24,2022,'https://drive.google.com/file/d/1wCxw8jK-aUOVm45OSoy3cuIh0Dworyne/view?usp=sharing'),
    (25,2022,'https://drive.google.com/file/d/10q-6R9xo7RObUyhnpwv9ezSz2riIO9mY/view?usp=sharing'),
    (26,2022,'https://drive.google.com/file/d/1SSI63FrRNuuK5dEDoLKSLVklP7SOCRbx/view?usp=sharing');