import { CornerDownRight, MoreVertical } from "lucide-react";

const comments = [
  {
    id: 1,
    name: "Alex Mercer",
    initials: "AM",
    time: "14 min",
    message: "Looking forward to the game! Whats the final player count?",
    color: "bg-primary text-white",
    avatarBg: "bg-creamy text-primary",
    replies: [
      {
        id: 2,
        name: "Rifat Khan",
        initials: "RK",
        time: "14 min",
        message: "missing few players",
        color: "bg-creamy text-primary",
        avatarBg: "bg-primary text-creamy",
      },
      {
        id: 3,
        name: "Rifat Khan",
        initials: "RK",
        time: "14 min",
        message: "got any friends?",
        color: "bg-creamy text-primary",
        avatarBg: "bg-primary text-creamy",
      },
    ],
  },
  {
    id: 4,
    name: "Alex Mercer",
    initials: "AM",
    time: "14 min",
    message: "Looking forward to the game! Whats the final player count?",
    color: "bg-primary text-white",
    avatarBg: "bg-creamy text-primary",
    replies: [],
  },
  {
    id: 5,
    name: "Alex Mercer",
    initials: "AM",
    time: "14 min",
    message: "Looking forward to the game! Whats the final player count?",
    color: "bg-primary text-white",
    avatarBg: "bg-creamy text-primary",
    replies: [
      {
        id: 6,
        name: "Rifat Khan",
        initials: "RK",
        time: "14 min",
        message: "got any friends?",
        color: "bg-creamy text-primary",
        avatarBg: "bg-primary text-creamy",
      },
    ],
  },
];

function CommentBubble({ comment }: { comment: any }) {
  return (
    <div className={`rounded-xl p-4 flex flex-col gap-1 ${comment.color}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm ${comment.avatarBg}`}
          >
            {comment.initials}
          </span>
          <span className="font-medium">
            {comment.name}
            {comment.isHost && (
              <span className="text-xs ml-1 text-creamy">(Host)</span>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs">{comment.time}</span>
          <MoreVertical className="w-4 h-4" />
        </div>
      </div>
      <div className="mt-1 text-sm">{comment.message}</div>
    </div>
  );
}

export default function EventComments() {
  return (
    <section className="bg-[#f7f6f2] p-4 rounded-xl flex flex-col gap-3">
      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col gap-1">
          <CommentBubble comment={comment} />
          <div className="ml-14 mt-1">
            <button className="text-sm text-gray-500 hover:underline mb-2 flex items-center gap-1">
              {" "}
              <CornerDownRight className="w-4 h-4" /> Reply
            </button>
            {comment.replies &&
              comment.replies.map((reply: any) => (
                <div key={reply.id} className="mt-2">
                  <CommentBubble comment={reply} />
                </div>
              ))}
          </div>
        </div>
      ))}
      <div className="mt-4">
        <input
          className="w-full rounded-full border border-gray-200 px-4 py-2 text-sm bg-white"
          placeholder="Write a comment"
        />
      </div>
    </section>
  );
}
