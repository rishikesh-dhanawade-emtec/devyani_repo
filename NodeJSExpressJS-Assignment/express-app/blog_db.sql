create database blog_db;

use blog_db;

create table blog (
    id integer primary key auto_increment,
    title varchar(10),
    description varchar(100),
    userId integer,
    categoryId integer,
)

create table user (
    id integer primary key auto_increment,
    firstname varchar(20),
    lastname varchar(20),
    email varchar(50),
    password varchar(100),
)

create table category (
    id integer primary key auto_increment,
    title varchar(50)
)