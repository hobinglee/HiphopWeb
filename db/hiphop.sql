/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2016-04-01 9:58:52                           */
/*==============================================================*/

create database hiphop1 default charset utf8;
use hiphop1;

drop table if exists active;

drop table if exists admin;

drop table if exists man_intro;

drop table if exists mes;

/*==============================================================*/
/* Table: active                                                */
/*==============================================================*/
create table active
(
   agcid                int not null auto_increment,
   agname               varchar(300),
   agsponsor            varchar(100),
   agtime               datetime,
   agcent               text,
   agimg                varchar(100),
   primary key (agcid)
);

/*==============================================================*/
/* Table: admin                                                 */
/*==============================================================*/
create table admin
(
   aid                  int not null auto_increment,
   aname                varchar(50),
   account              char(20),
   apwd                 char(20),
   issup                int,
   primary key (aid)
);

/*==============================================================*/
/* Table: man_intro                                             */
/*==============================================================*/
create table man_intro
(
   mid                  int not null auto_increment,
   mname                varchar(50),
   mglory               varchar(200),
   intro                text,
   mimg                 varchar(100),
   primary key (mid)
);

/*==============================================================*/
/* Table: mes                                                   */
/*==============================================================*/
create table mes
(
   mesid                int not null auto_increment,
   mname                varchar(50),
   memail               varchar(50),
   mtime                datetime,
   mcent                text,
   primary key (mesid)
);

