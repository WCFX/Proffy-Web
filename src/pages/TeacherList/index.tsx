import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

export default function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">

        <Select 
          name="subject"
          label="Matéria" 
          options={[
            { value: 'Artes', label: 'Artes'},
            { value: 'Biologia', label: 'Biologia'},
            { value: 'Ciências', label: 'Ciências'},
            { value: 'Educação física', label: 'Educação física'},
            { value: 'Física', label: 'Física'},
            { value: 'Geografia', label: 'Geografia'},
            { value: 'História', label: 'História'},
            { value: 'Matemática', label: 'Matemática'},
            { value: 'Português', label: 'Português'},
            { value: 'Química', label: 'Química'},
          ]}
        />

        <Select 
          name="week_day"
          label="Dia da Semana" 
          options={[
            { value: '0', label: 'Domingo'},
            { value: '1', label: 'Segunda-Feira'},
            { value: '2', label: 'Terça-Feira'},
            { value: '3', label: 'Quarta-feira'},
            { value: '4', label: 'Quinta-feira'},
            { value: '5', label: 'Sexta-feira'},
            { value: '6', label: 'Sábado'}
          ]}
        />        
          <Input type="time" name="time" label="Hora" />

        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
};