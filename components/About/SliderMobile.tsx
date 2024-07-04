'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Team {
  id: number;
  image: string;
  name: string;
  title: string;
  DivitionCategory: {
    title: string;
  };
}

const SliderMobile = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/team/lists`);
        const data = await response.json();
        setTeams(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Kelompokkan data berdasarkan DivitionCategoryId
  const groupedTeams: { [key: string]: Team[] } = teams.reduce((acc, team) => {
    const category = team.DivitionCategory.title;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(team);
    return acc;
  }, {} as { [key: string]: Team[] });

  return (
    <main>
      <div className="px-3 py-10 bg-[url('/assets/illustration/bg-about.svg')] bg-cover">
        <div className="flex flex-col justify-center text-white text-center font-bold px-5">
          <h1>Meet the team behind the apps</h1>
          {Object.keys(groupedTeams).map(category => (
            <div key={category}>
              <h1 className='py-10 text-white text-center'>{category}</h1>
              <div className="flex flex-wrap justify-center gap-2">
                {groupedTeams[category].map((member: Team) => (
                  <div key={member.id} className='w-[48%]'>
                    <Image
                      loading="lazy"
                      src={member.image}
                      width={359}
                      height={343}
                      alt={member.name}
                      className='w-full h-[150px] object-cover'
                    />
                    <div className="w-full bg-opacity-75 py-2">
                      <div className="text-white text-center">
                        <h1 className="font-bold text-[14px] md:text-[20px]">{member.name}</h1>
                        <h2 className="text-[12px] md:text-[16px]">{member.title}</h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SliderMobile;
