/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2016-03-28 10:46:13                          */
/*==============================================================*/

create database hiphop default charset utf8;

use  hiphop;

drop table if exists admin;

drop table if exists infoType;

drop table if exists infocontent;

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
insert into admin values(default,"赖恩顺","hiphop_admin","iamadancer",1);
/*==============================================================*/
/* Table: infoType                                              */
/*==============================================================*/
create table infoType
(
   tid                  int not null auto_increment,
   tname                varchar(50),
   uptype               int,
   torder               int,
   primary key (tid)
);

/*==============================================================*/
/* Table: infocontent                                           */
/*==============================================================*/
create table infocontent
(
   cid                  int not null auto_increment,
   ctitle               varchar(150),
   ceider               varchar(50),
   caddtime             datetime,
   aid                  int,
   cimg                 mediumblob,
   content              text,
   primary key (cid)
);

