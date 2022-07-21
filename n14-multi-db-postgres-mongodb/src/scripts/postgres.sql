--create
DROP TABLE IF EXISTS TB_GUITARS;
CREATE TABLE TB_GUITARS (
  ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
  BRAND TEXT NOT NULL,
  COLOR TEXT NOT NULL
)

--insert
INSERT INTO TB_GUITARS (BRAND, COLOR)
VALUES 
    ('FENDER', 'BLUE'),
    ('FENDER', 'RED'),
    ('FENDER', 'WITE')

--read
SELECT * FROM TB_GUITARS;
SELECT * FROM TB_GUITARS WHERE COLOR= 'RED'
SELECT BRAND FROM TB_GUITARS WHERE COLOR= 'RED'

--update
UPDATE TB_GUITARS
  SET BRAND = 'CHINESA', COLOR = 'PINK'
  WHERE ID = 1

--delete
DELETE FROM TB_GUITARS WHERE ID = 2