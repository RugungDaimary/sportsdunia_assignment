import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { College } from '../../colleges/entities/college.entity';

@Entity()
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => College, (college) => college.courses)
  college!: College;

  @Column()
  course_name!: string;

  @Column()
  course_duration!: string;

  @Column()
  course_fee!: number;
}
