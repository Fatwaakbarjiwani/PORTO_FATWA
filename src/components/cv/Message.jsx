export default function Message() {
  return (
    <section className="w-full bg-gradient-to-b to-primary from-second/10 flex flex-col items-center justify-center py-16 px-16">
      <div className="rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6 border-l-8 border-primary">
        {/* Foto orang */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Chris Coyier"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
        {/* Kutipan dan nama */}
        <div className="flex-1 flex flex-col items-start">
          <blockquote className="text-xl md:text-2xl italic text-white/90 mb-4">
            &quot;Front-end development is not just about making things look
            pretty. It&apos;s about creating experiences that feel intuitive,
            fast, and delightful for users.&quot;
          </blockquote>
          <div className="flex flex-col items-start">
            <span className="font-bold text-primary text-lg">Chris Coyier</span>
            <span className="text-white/60 text-sm">
              Co-founder of CodePen, Front-End Expert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
