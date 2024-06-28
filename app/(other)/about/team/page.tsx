import TeamLayout from '@/components/About/Team'
import { getTeamList } from '@/components/Fetching/Division/division';
import React from 'react'

export default async function TeamPage() {
  const teams = await getTeamList();
  return (
    <section className="md:min-h-[1200px]">
      <TeamLayout teams={teams} />
    </section>
  )
}