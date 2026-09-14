var stimuliPool = [
  {
    "predicate": "面白い",
    "attitude": "warning",
    "relationship": "friend",
    "text": "A friend shows Peter the comedy routine he filmed to post online. Wanting to be helpful, Peter points out hesitantly: \"The middle part doesn't feel [modifier] funny to me. What about cutting it down?\""
  },
  {
    "predicate": "面白い",
    "attitude": "non-committal",
    "relationship": "friend",
    "text": "Peter and a friend are discussing which comedy to watch. Not wanting to assert his opinion, Peter cautiously replies: \"It doesn't seem [modifier] funny, but apparently the visuals are beautiful.\""
  },
  {
    "predicate": "面白い",
    "attitude": "acknowledge",
    "relationship": "friend",
    "text": "A friend insists it will be great and drags Peter to an obscure comedy film. He came along half-convinced. However, it was funny, just as the friend had said. He thanks his friend: \"That was [modifier]funny. Thanks for inviting me.\""
  },
  {
    "predicate": "面白い",
    "attitude": "neutral",
    "relationship": "friend",
    "text": "After the screening, Peter is asked by a friend who hasn't seen the film yet how funny it was, and he answers: \"It was [modifier] funny.\""
  },
  {
    "predicate": "面白い",
    "attitude": "annoyed",
    "relationship": "friend",
    "text": "A friend keeps mining Peter's screw-up for laughs. Peter has asked him to stop and he hasn't, so, irritated, he says: \"That story is not [modifier] funny. Just drop it.\""
  },
  {
    "predicate": "面白い",
    "attitude": "encouraging",
    "relationship": "friend",
    "text": "The comedy show a friend suggested turns out to be dull. Since the friend feels bad for suggesting it, Peter reassures him: \"It was [modifier] funny. And just getting the chance for us all to go together made me happy.\""
  },
  {
    "predicate": "面白い",
    "attitude": "warning",
    "relationship": "colleague",
    "text": "The colleague in charge of the entertainment for the company event shows Peter the bit he came up with. Wanting to be helpful, Peter points out hesitantly: \"The middle stretch doesn't feel [modifier] funny to me. What about shortening it?\""
  },
  {
    "predicate": "面白い",
    "attitude": "non-committal",
    "relationship": "colleague",
    "text": "Peter is asked by a colleague for his view on the entertainment for the welcome party. Not wanting to assert his opinion, he cautiously replies: \"That plan might not be [modifier] funny, but it's easy to prepare.\""
  },
  {
    "predicate": "面白い",
    "attitude": "acknowledge",
    "relationship": "colleague",
    "text": "Peter watched, half-convinced, a comedy film a colleague swore was great. However, it was funny, just as the colleague had said. He thanks the colleague: \"That was [modifier]funny. Thank you for the recommendation.\""
  },
  {
    "predicate": "面白い",
    "attitude": "neutral",
    "relationship": "colleague",
    "text": "The day after the company event, Peter is asked by a colleague who didn't attend how funny the entertainment was, and he answers: \"It was [modifier] funny.\""
  },
  {
    "predicate": "面白い",
    "attitude": "annoyed",
    "relationship": "colleague",
    "text": "At a work drinking party, a colleague keeps dredging up Peter's mistake for laughs. Peter can tell the others are laughing out of politeness, and, irritated, he says: \"That story is not [modifier] funny. Could you leave it there?\""
  },
  {
    "predicate": "面白い",
    "attitude": "encouraging",
    "relationship": "colleague",
    "text": "The entertainment segment a colleague was in charge of didn't land as well as hoped. Seeing him looking apologetic, Peter reassures him: \"It was [modifier] funny. Just carrying the room like that was enough, I think.\""
  },
  {
    "predicate": "面白い",
    "attitude": "warning",
    "relationship": "boss",
    "text": "The boss runs by Peter the anecdote he plans to tell at the morning meeting. Wanting to be helpful, Peter points out hesitantly: \"I'm not sure that opener comes across as [modifier] funny to me. Maybe it's worth shortening it?\""
  },
  {
    "predicate": "面白い",
    "attitude": "non-committal",
    "relationship": "boss",
    "text": "Peter is asked by his boss for his view on the year-end party entertainment. Not wanting to assert his opinion, he cautiously replies: \"That idea might not be [modifier] funny, but it's easy to prepare.\""
  },
  {
    "predicate": "面白い",
    "attitude": "acknowledge",
    "relationship": "boss",
    "text": "Peter watched, half-convinced, a comedy film his boss strongly recommended. However, it was funny, just as his boss had said. The next day, he thanks his boss: \"That was [modifier]funny. Thank you for recommending it.\""
  },
  {
    "predicate": "面白い",
    "attitude": "neutral",
    "relationship": "boss",
    "text": "Asked by his boss how funny the entertainment at the company event was, Peter answers: \"It was [modifier] funny.\""
  },
  {
    "predicate": "面白い",
    "attitude": "annoyed",
    "relationship": "boss",
    "text": "The boss opens every meeting by using Peter's old mistake to lighten the mood. After the umpteenth time Peter has had enough, and once they are alone he says, irritated: \"Honestly, I don't [modifier] find the story funny, so I'd like you to let it go now.\""
  },
  {
    "predicate": "面白い",
    "attitude": "encouraging",
    "relationship": "boss",
    "text": "The anecdote the boss told at the morning meeting didn't get much of a reaction. Seeing that he is bothered by it, Peter reassures him: \"It was [modifier] funny. It lightened the mood first thing in the morning.\""
  },
  {
    "predicate": "面白い",
    "attitude": "warning",
    "relationship": "stranger",
    "text": "A street comedian who has just performed asks Peter, a passerby, for his impressions. Wanting to be helpful, Peter points out hesitantly: \"The middle part doesn't feel [modifier] funny to me. Maybe it's worth shortening that part?\""
  },
  {
    "predicate": "面白い",
    "attitude": "non-committal",
    "relationship": "stranger",
    "text": "Peter has come to rent a video, and a customer next to him asks what the film's reputation is. Not wanting to assert his opinion, Peter cautiously replies: \"This film might not be [modifier] funny, but apparently the visuals are beautiful.\""
  },
  {
    "predicate": "面白い",
    "attitude": "acknowledge",
    "relationship": "stranger",
    "text": "Peter rented, half-convinced, a film a shop clerk swore was great. However, it was funny, just as the clerk had said. When returning it, he thanks the clerk: \"That was [modifier]funny. Thank you for recommending it.\""
  },
  {
    "predicate": "面白い",
    "attitude": "neutral",
    "relationship": "stranger",
    "text": "In the lobby after the screening, Peter is asked by someone about to see the same film how funny it was, and he answers: \"It was [modifier] funny.\""
  },
  {
    "predicate": "面白い",
    "attitude": "annoyed",
    "relationship": "stranger",
    "text": "At an izakaya, the customer at the next table butts into Peter's conversation and gets laughs by mocking the way he talks. It keeps happening, and, irritated, Peter says: \"That is not [modifier] funny. Could you leave us alone?\""
  },
  {
    "predicate": "面白い",
    "attitude": "encouraging",
    "relationship": "stranger",
    "text": "A street performer, bothered that hardly anyone gathered, apologizes to Peter, who had stopped to watch. Peter reassures him: \"It was [modifier] funny. Some people did stay to the end.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "warning",
    "relationship": "friend",
    "text": "The restaurant a friend picked for the reunion has gone downhill lately. Wanting to be helpful, Peter points out hesitantly: \"I hear the food there doesn't taste [modifier] good these days. What about we go somewhere else?\""
  },
  {
    "predicate": "美味しい",
    "attitude": "non-committal",
    "relationship": "friend",
    "text": "Peter and a friend are deciding where to eat. Not wanting to assert his opinion, Peter cautiously replies: \"The food there might not taste [modifier] good, but it's cheap and the portions are big.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "acknowledge",
    "relationship": "friend",
    "text": "A friend takes Peter to a restaurant he had been avoiding because it looked unremarkable, insisting the food is great. He was half-convinced. However, the food tastes good, just as the friend had said. He thanks his friend: \"This tastes [modifier]good. Thanks for bringing me here.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "neutral",
    "relationship": "friend",
    "text": "Back from lunch, Peter is asked by a friend who had been curious about the place how good the food was, and he answers: \"The food tasted [modifier] good.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "annoyed",
    "relationship": "friend",
    "text": "A friend dumps a huge amount of spice onto the dish Peter had been looking forward to, ruining it. Irritated, Peter says: \"The food doesn't taste [modifier] good anymore!\""
  },
  {
    "predicate": "美味しい",
    "attitude": "encouraging",
    "relationship": "friend",
    "text": "The dish a friend cooked turns out bland. Since she apologizes for it, Peter reassures her: \"It tastes [modifier] good. A bit of salt would make it even better.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "warning",
    "relationship": "colleague",
    "text": "A colleague is about to book a restaurant for a client dinner. Wanting to be helpful, Peter points out hesitantly: \"I hear the food there doesn't taste [modifier] good these days. What about picking somewhere else?\""
  },
  {
    "predicate": "美味しい",
    "attitude": "non-committal",
    "relationship": "colleague",
    "text": "Peter is asked by a colleague for his view on where to have lunch. Not wanting to assert his opinion, he cautiously replies: \"The food there might not taste [modifier] good, but it's cheap and quick.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "acknowledge",
    "relationship": "colleague",
    "text": "Peter orders, half-convinced, the new cafeteria dish a colleague swore was great. However, one bite in, it tastes good, just as the colleague had said. He thanks the colleague: \"This tastes [modifier]good. Thanks for telling me.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "neutral",
    "relationship": "colleague",
    "text": "Back from a business trip, Peter is asked by a colleague planning to go to the same restaurant how good the food was, and he answers: \"The food tasted [modifier] good.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "annoyed",
    "relationship": "colleague",
    "text": "During a business trip, a colleague brought back a bento to share as a treat. While dishing out Peter's portion, the colleague, meaning well, poured on a large amount of sauce, and the original flavor was lost. Irritated, Peter says: \"This doesn't taste [modifier] good anymore. Could you not do that again?\""
  },
  {
    "predicate": "美味しい",
    "attitude": "encouraging",
    "relationship": "colleague",
    "text": "The sweets a colleague brought in are overbaked. Since she apologizes for it, Peter reassures her: \"They taste [modifier] good. Nice and toasty — I like them like this.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "warning",
    "relationship": "boss",
    "text": "The boss is choosing a restaurant for a client dinner. Wanting to be helpful, Peter points out hesitantly: \"I've heard the food there doesn't taste [modifier] good these days. Maybe it's worth considering another place as well?\""
  },
  {
    "predicate": "美味しい",
    "attitude": "non-committal",
    "relationship": "boss",
    "text": "Peter is asked by his boss for his view on where to hold the dinner. Not wanting to assert his opinion, he cautiously replies: \"The food might not taste [modifier] good, but it's a quiet, pleasant place.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "acknowledge",
    "relationship": "boss",
    "text": "Peter visits, half-convinced, a restaurant his boss strongly recommended. However, the food tasted good, just as his boss had said. The next day, he thanks his boss: \"It tasted [modifier]good. Thank you for telling me about it.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "neutral",
    "relationship": "boss",
    "text": "Asked by his boss how good the food was at the restaurant they used for the client dinner, Peter answers: \"The food tasted [modifier] good.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "annoyed",
    "relationship": "boss",
    "text": "Peter, a cook, puts out the prototype of a new dish he spent a long time perfecting. But after tasting it, the head chef adds a huge amount of spice and the original flavor is gone. Irritated, Peter says: \"I feel like this doesn't taste [modifier] good anymore.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "encouraging",
    "relationship": "boss",
    "text": "The boss brings in sweets he made with his family, but they are overbaked. Seeing that he is bothered by it, Peter reassures him: \"They taste [modifier] good. Nice and toasty — I like them like this.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "warning",
    "relationship": "stranger",
    "text": "Outside a newly opened shop, a member of staff is handing out prototype sweets and asking for impressions. Wanting to be helpful, Peter points out hesitantly: \"The sweetness is strong, so some people might not think it tastes [modifier] good. Maybe it's worth toning it down?\""
  },
  {
    "predicate": "美味しい",
    "attitude": "non-committal",
    "relationship": "stranger",
    "text": "A customer sharing his table asks Peter which dish to get. Not wanting to assert his opinion, Peter cautiously replies: \"That one might not taste [modifier] good, but it's cheap and a big portion.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "acknowledge",
    "relationship": "stranger",
    "text": "Peter orders, half-convinced, the dish a server swore was great. However, one bite in, it tastes good, just as the server had said. He thanks the server: \"This tastes [modifier]good. Thank you for recommending it.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "neutral",
    "relationship": "stranger",
    "text": "Outside the restaurant, someone deciding whether to go in asks Peter how good the food was, and he answers: \"The food tasted [modifier] good.\""
  },
  {
    "predicate": "美味しい",
    "attitude": "annoyed",
    "relationship": "stranger",
    "text": "The dish Peter ordered arrives drenched in a sauce he didn't ask for. With his break already running short, an irritated Peter stops the server and says: \"This came with a seasoning I didn't order, and it doesn't taste [modifier] good now. Could you remake it?\""
  },
  {
    "predicate": "美味しい",
    "attitude": "encouraging",
    "relationship": "stranger",
    "text": "A server keeps apologizing for having got the seasoning wrong on Peter's order. Peter reassures her: \"This tastes [modifier] good too. Please don't worry about it.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "warning",
    "relationship": "friend",
    "text": "A friend finishes decorating the clubroom and shows Peter. Wanting to be helpful, Peter points out hesitantly: \"Just that colour combination doesn't look [modifier] nice to me. What about changing it?\""
  },
  {
    "predicate": "綺麗",
    "attitude": "non-committal",
    "relationship": "friend",
    "text": "A friend asks Peter for advice on where to go on a date. Not wanting to assert his opinion, Peter cautiously replies: \"The view there might not be [modifier] nice, but the food is good.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "acknowledge",
    "relationship": "friend",
    "text": "A friend takes Peter to a garden he had been avoiding because it was old, insisting it is beautiful. He was half-convinced. However, it's nice, just as the friend had said. He thanks his friend: \"This is [modifier]nice. Thanks for bringing me here.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "neutral",
    "relationship": "friend",
    "text": "Back from his trip, Peter is asked by a friend who is deciding whether to go next month how nice the place was, and he answers: \"It was [modifier] nice.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "annoyed",
    "relationship": "friend",
    "text": "A friend keeps piling bags into the room Peter had arranged down to the furniture placement for their guests, ruining it. Irritated, Peter says: \"I just got it all set up, and now it's not [modifier] nice to look at!\""
  },
  {
    "predicate": "綺麗",
    "attitude": "encouraging",
    "relationship": "friend",
    "text": "The lines in a drawing a friend made for him came out uneven. Since she apologizes for it, Peter reassures her: \"It's drawn [modifier] nicely. The lines can be cleaned up later.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "warning",
    "relationship": "colleague",
    "text": "A colleague who has picked the product photos shows them to Peter. Wanting to be helpful, Peter points out hesitantly: \"Just that one doesn't look [modifier] nice to me. What about reshooting it?\""
  },
  {
    "predicate": "綺麗",
    "attitude": "non-committal",
    "relationship": "colleague",
    "text": "Peter is asked by a colleague for his view on which accessory to buy. Not wanting to assert his opinion, he cautiously replies: \"That one might not be [modifier] nice-looking, but it's supposed to be durable.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "acknowledge",
    "relationship": "colleague",
    "text": "Peter goes, half-convinced, to an observation deck a colleague swore was beautiful. However, it was nice, just as the colleague had said. The next day, he thanks the colleague: \"It was [modifier]nice. Thanks for telling me.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "neutral",
    "relationship": "colleague",
    "text": "Back from a business trip, Peter is asked by a colleague heading to the same place how nice the facility was, and he answers: \"It was [modifier] nice.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "annoyed",
    "relationship": "colleague",
    "text": "A colleague has stacked documents and personal items all over the meeting room Peter had set up for the clients. With little time left before they arrive, an irritated Peter says: \"This is not [modifier] nice to look at anymore. We're short on time, so could you move it?\""
  },
  {
    "predicate": "綺麗",
    "attitude": "encouraging",
    "relationship": "colleague",
    "text": "A diagram in a colleague's document came out misaligned in print. Since she apologizes for it, Peter reassures her: \"It looks [modifier] nice, I think. Fixing it in the next version is plenty.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "warning",
    "relationship": "boss",
    "text": "The boss picks out photos for the company brochure and shows them to Peter. Wanting to be helpful, Peter points out hesitantly: \"Just that one might not look [modifier] nice. Maybe it's worth swapping it out?\""
  },
  {
    "predicate": "綺麗",
    "attitude": "non-committal",
    "relationship": "boss",
    "text": "Peter is asked by his boss for his view on a corporate gift. Not wanting to assert his opinion, he cautiously replies: \"That one might not look [modifier] nice, but it's durable.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "acknowledge",
    "relationship": "boss",
    "text": "Peter visits, half-convinced, a garden his boss strongly recommended. However, it was nice, just as his boss had said. The next day, he thanks his boss: \"It was [modifier]nice. Thank you for telling me about it.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "neutral",
    "relationship": "boss",
    "text": "Asked by his boss how nice the facility he inspected was, Peter answers: \"It was [modifier] nice.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "annoyed",
    "relationship": "boss",
    "text": "The boss has left his bags and coat in the meeting room Peter had set up for the clients. Thinking of all the work he had put in, Peter, irritated, says: \"It might not look [modifier] nice arranged like this, so would you mind moving your things next door?\""
  },
  {
    "predicate": "綺麗",
    "attitude": "encouraging",
    "relationship": "boss",
    "text": "A diagram in the boss's document came out misaligned in print. Seeing that he is bothered by it, Peter reassures him: \"It looks [modifier] nice, I think.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "warning",
    "relationship": "stranger",
    "text": "A florist shows Peter the pots she has finished arranging outside the shop and asks what he thinks. Wanting to be helpful, Peter points out hesitantly: \"Just that one corner might not look [modifier] nice. Maybe it's worth separating the colours?\""
  },
  {
    "predicate": "綺麗",
    "attitude": "non-committal",
    "relationship": "stranger",
    "text": "A tourist sitting next to him on the train asks Peter about a souvenir shop they're planning to visit. Not wanting to assert his opinion, Peter cautiously replies about their products: \"Their stuff might not be [modifier] nice-looking, but it's supposedly durable.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "acknowledge",
    "relationship": "stranger",
    "text": "Peter walks, half-convinced, a path the hotel receptionist swore was beautiful. However, it was nice, just as the receptionist had said. He thanks the receptionist: \"It was [modifier]nice. Thank you for telling me about it.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "neutral",
    "relationship": "stranger",
    "text": "At the entrance to the observation deck, someone about to go up asks Peter how nice the view was, and he answers: \"It was [modifier] nice.\""
  },
  {
    "predicate": "綺麗",
    "attitude": "annoyed",
    "relationship": "stranger",
    "text": "A passerby has parked a bicycle in the flower bed outside the shop that Peter had been tending since morning, knocking the flowers over. Irritated, Peter stops the person and says: \"I had just got it looking right and now it's not [modifier] nice to look at. Could you move it?\""
  },
  {
    "predicate": "綺麗",
    "attitude": "encouraging",
    "relationship": "stranger",
    "text": "The hotel receptionist keeps apologizing for how old the room's interior is. Peter reassures her: \"It's [modifier] nice. You can tell it's been well looked after.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "warning",
    "relationship": "friend",
    "text": "A friend has planned the travel for the day of the reunion by bus. Wanting to be helpful, Peter points out hesitantly: \"The bus at that hour tends to be [modifier] delayed. What about we take the train?\""
  },
  {
    "predicate": "遅れている",
    "attitude": "non-committal",
    "relationship": "friend",
    "text": "Peter and a friend are discussing how to get there. Not wanting to assert his opinion, Peter cautiously replies: \"The bus seems [modifier] delayed, but it's easy since there's no transfer.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "acknowledge",
    "relationship": "friend",
    "text": "A friend recommends a bus route Peter had been avoiding because it was often delayed, saying the timetable has been revised. He rode it half-convinced. However, it arrived smoothly, just as the friend had said. He thanks his friend: \"The bus isn't [modifier] delayed. Thanks for telling me.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "neutral",
    "relationship": "friend",
    "text": "A friend who is deciding whether to use the same bus route for their commute asks Peter how delayed the bus was this morning, and he answers: \"The bus was [modifier] delayed.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "annoyed",
    "relationship": "friend",
    "text": "Peter is preparing for his high school reunion with a friend. He asked her to book the restaurant urgently, but days have passed with no update at all. With the day approaching, anxious and irritated, Peter says: \"The booking is [modifier] late — please, can you just get it done today?\""
  },
  {
    "predicate": "遅れている",
    "attitude": "encouraging",
    "relationship": "friend",
    "text": "The preparations a friend took on are running behind schedule. She apologizes for it, and Peter reassures her: \"It's not [modifier]late. We still have two days, so we'll make it fine.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "warning",
    "relationship": "colleague",
    "text": "The colleague in charge of transportation for the company trip shows Peter his plan to go by bus. Wanting to be helpful, Peter points out hesitantly: \"The bus at that hour tends to be [modifier] delayed. What about taking the train?\""
  },
  {
    "predicate": "遅れている",
    "attitude": "non-committal",
    "relationship": "colleague",
    "text": "Peter is asked by a colleague for his view on how to travel for the business trip. Not wanting to assert his opinion, he cautiously replies: \"The bus seems [modifier] delayed, but it's easy since there's no transfer.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "acknowledge",
    "relationship": "colleague",
    "text": "A colleague recommends a bus route Peter had been avoiding because it was often delayed, saying the timetable has been revised. He rode it half-convinced. However, it arrived smoothly, just as the colleague had said. He thanks the colleague: \"The bus isn't [modifier] delayed. Thanks for telling me.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "neutral",
    "relationship": "colleague",
    "text": "A colleague who is deciding whether to use the same bus route for their commute asks Peter how delayed the bus was this morning, and he answers: \"The bus was [modifier] delayed.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "annoyed",
    "relationship": "colleague",
    "text": "On an urgent job they are handling together, the work Peter handed to a colleague is days behind. He still hasn't touched it and looks like he has time on his hands; irritated, Peter says: \"The work I asked you for is [modifier] late. Could you get it to me by the end of today?\""
  },
  {
    "predicate": "遅れている",
    "attitude": "encouraging",
    "relationship": "colleague",
    "text": "A colleague is given unfamiliar work, and is running behind schedule. Since she apologizes for it, Peter reassures her: \"It's not [modifier]late. I'll join in from here, so we'll have plenty of time.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "warning",
    "relationship": "boss",
    "text": "The boss has planned the travel for the site visit by bus. Wanting to be helpful, Peter points out hesitantly: \"The bus at that hour appears to be [modifier] delayed. Maybe it's worth taking the train?\""
  },
  {
    "predicate": "遅れている",
    "attitude": "non-committal",
    "relationship": "boss",
    "text": "Peter is asked by his boss for his view on how to travel for the business trip. Not wanting to assert his opinion, he cautiously replies: \"The bus appears to be [modifier] delayed, but it's easy since there are no transfers.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "acknowledge",
    "relationship": "boss",
    "text": "The boss recommends a bus route Peter had been avoiding because it was often delayed, saying the timetable has been revised. He rode it half-convinced. However, it arrived smoothly, just as his boss had said. The next day, he thanks his boss: \"The bus wasn't [modifier] delayed. Thank you for telling me.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "neutral",
    "relationship": "boss",
    "text": "The boss is planning to use the same bus route for a business trip and asks Peter how delayed the bus was this morning. Peter answers: \"The bus was [modifier] delayed.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "annoyed",
    "relationship": "boss",
    "text": "On an urgent matter, the application Peter submitted to his boss still hasn't been reviewed days later. Irritated, Peter says: \"The review of my application seems to be [modifier] late — would it be possible for you to look at it today?\""
  },
  {
    "predicate": "遅れている",
    "attitude": "encouraging",
    "relationship": "boss",
    "text": "The review the boss took on is running behind schedule. Seeing that he is bothered by it, Peter reassures him: \"It's not [modifier]late. If I have it by tomorrow morning, we'll have plenty of time.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "warning",
    "relationship": "stranger",
    "text": "A bus company employee finishes writing up the service information to post at the stop and shows it to Peter. Wanting to be helpful, Peter points out hesitantly: \"The bus on this route also appears to be [modifier] delayed right now. Maybe it's worth adding that to the sign?\""
  },
  {
    "predicate": "遅れている",
    "attitude": "non-committal",
    "relationship": "stranger",
    "text": "A passenger standing next to him at the bus stop asks whether the bus or the train is better. Not wanting to assert his opinion, Peter cautiously replies: \"The bus seems [modifier] delayed, but it's easy since there are no transfers.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "acknowledge",
    "relationship": "stranger",
    "text": "A driver tells Peter the timetable on this route was recently revised, and he boards half-convinced. However, it arrives smoothly, just as the driver had said. When getting off, he thanks the driver: \"The bus wasn't [modifier] delayed. Thank you for telling me.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "neutral",
    "relationship": "stranger",
    "text": "A passenger who is deciding whether to use the same bus route for their commute asks Peter how delayed the bus was this morning, and he answers: \"The bus was [modifier] delayed.\""
  },
  {
    "predicate": "遅れている",
    "attitude": "annoyed",
    "relationship": "stranger",
    "text": "Peter ordered a sandwich for lunch, but it still hasn't come after thirty minutes. Other customers are getting their food one after another and his lunch break is down to ten minutes. The server who took his order has gone on break too, and, irritated, Peter stops a server for the second time and says: \"What I ordered is [modifier] late. How much longer will it be?\""
  },
  {
    "predicate": "遅れている",
    "attitude": "encouraging",
    "relationship": "stranger",
    "text": "The driver keeps bowing and apologizing for the bus running late. Peter reassures him: \"The bus isn't [modifier]delayed. Nobody's inconvenienced by this much.\""
  },
  {
    "predicate": "寒い",
    "attitude": "warning",
    "relationship": "friend",
    "text": "A friend suggests a riverside spot for the cherry blossom viewing. Wanting to be helpful, Peter points out hesitantly: \"I think it gets [modifier] cold there at night. What about we move it earlier?\""
  },
  {
    "predicate": "寒い",
    "attitude": "non-committal",
    "relationship": "friend",
    "text": "A friend asks Peter what she should wear. Not wanting to assert his opinion, Peter cautiously replies: \"It seems [modifier] cold today, but that's light and easy to move in.\""
  },
  {
    "predicate": "寒い",
    "attitude": "acknowledge",
    "relationship": "friend",
    "text": "A friend recommends a coat Peter had assumed would be cold because it was thin, insisting it is warm. He bought it half-convinced and wore it outside. However, it's warm, just as the friend had said. He thanks his friend: \"I'm not [modifier] cold! Thanks for recommending it.\""
  },
  {
    "predicate": "寒い",
    "attitude": "neutral",
    "relationship": "friend",
    "text": "Asked by a friend who is about to head out how cold it is outside, Peter answers: \"It's [modifier] cold.\""
  },
  {
    "predicate": "寒い",
    "attitude": "annoyed",
    "relationship": "friend",
    "text": "Peter is working in a room he had warmed up when a friend throws the window wide open without asking, and it turns cold fast. Irritated at a friend who is always doing things without asking, Peter says: \"The room is [modifier] cold. Can you shut the window?\""
  },
  {
    "predicate": "寒い",
    "attitude": "encouraging",
    "relationship": "friend",
    "text": "The terrace seats a friend suggested turn out to be cold. Since she apologizes for it, Peter reassures her: \"It's not [modifier]cold. We'll warm right up once we have some tea.\""
  },
  {
    "predicate": "寒い",
    "attitude": "warning",
    "relationship": "colleague",
    "text": "The colleague who booked an outdoor terrace for the welcome party shows Peter the plan. Wanting to be helpful, Peter points out hesitantly: \"I think it's [modifier] cold there this time of year. What about going indoors?\""
  },
  {
    "predicate": "寒い",
    "attitude": "non-committal",
    "relationship": "colleague",
    "text": "Peter is asked by a colleague for his view on what to wear on the day of the site visit. Not wanting to assert his opinion, he cautiously replies: \"It seems [modifier] cold that day, but that's light and easy to move in.\""
  },
  {
    "predicate": "寒い",
    "attitude": "acknowledge",
    "relationship": "colleague",
    "text": "A colleague recommends a work jacket Peter had assumed would be cold because it was thin, insisting it is warm. He tried it half-convinced. However, it's warm, just as the colleague had said. He thanks the colleague: \"I'm not [modifier] cold. Thanks for telling me.\""
  },
  {
    "predicate": "寒い",
    "attitude": "neutral",
    "relationship": "colleague",
    "text": "Back from the warehouse, Peter is asked by a colleague about to go in how cold it is inside, and he answers: \"It's [modifier] cold.\""
  },
  {
    "predicate": "寒い",
    "attitude": "annoyed",
    "relationship": "colleague",
    "text": "The colleague who manages the air conditioning has turned it down too far and the office is freezing. Peter can't even borrow a jacket, and, irritated, he says: \"It's [modifier] cold. Could you turn it up?\""
  },
  {
    "predicate": "寒い",
    "attitude": "encouraging",
    "relationship": "colleague",
    "text": "The venue a colleague booked turns out to be a colder room than expected. Since she apologizes for it, Peter reassures her: \"It's not [modifier]cold. Once people are in, nobody will notice.\""
  },
  {
    "predicate": "寒い",
    "attitude": "warning",
    "relationship": "boss",
    "text": "The boss has designated an over-air-conditioned meeting room for the discussion with the clients. Wanting to be helpful, Peter points out hesitantly: \"I think that room is [modifier] cold. Maybe it's worth using a different one?\""
  },
  {
    "predicate": "寒い",
    "attitude": "non-committal",
    "relationship": "boss",
    "text": "Peter is asked by his boss for his view on what to wear on the day of the site visit. Not wanting to assert his opinion, he cautiously replies: \"It appears to be [modifier] cold that day, but that's light and easy to move in.\""
  },
  {
    "predicate": "寒い",
    "attitude": "acknowledge",
    "relationship": "boss",
    "text": "The boss recommends a coat Peter had assumed would be cold because it was thin, insisting it is warm. He bought it half-convinced and wore it outside. However, it was warm, just as his boss had said. The next day, he thanks his boss: \"I wasn't [modifier] cold. Thank you for telling me.\""
  },
  {
    "predicate": "寒い",
    "attitude": "neutral",
    "relationship": "boss",
    "text": "Asked by his boss how cold the site was, Peter answers: \"It was [modifier] cold.\""
  },
  {
    "predicate": "寒い",
    "attitude": "annoyed",
    "relationship": "boss",
    "text": "An hour into a meeting in a room where the boss has turned the air conditioning down, Peter's hands are too cold to concentrate and everyone around him looks cold too. Irritated at a boss who isn't reading the room, Peter decides to turn the air conditioning up and says to him: \"It seems [modifier] cold in this room, so I'll turn the temperature up.\""
  },
  {
    "predicate": "寒い",
    "attitude": "encouraging",
    "relationship": "boss",
    "text": "The venue the boss booked turns out to be a colder room than expected. Seeing that he is bothered by it, Peter reassures him: \"It's not [modifier]cold. Once people are in, I don't think anyone will notice.\""
  },
  {
    "predicate": "寒い",
    "attitude": "warning",
    "relationship": "stranger",
    "text": "A café server shows Peter the layout of the terrace seats they have put outside and asks what he thinks. Wanting to be helpful, Peter points out hesitantly: \"I think that seat is [modifier] cold with the wind coming through. Maybe it's worth moving it against the wall?\""
  },
  {
    "predicate": "寒い",
    "attitude": "non-committal",
    "relationship": "stranger",
    "text": "At the entrance, another customer asks Peter whether the terrace or inside is better. Not wanting to assert his opinion, Peter cautiously replies: \"The terrace seems [modifier] cold today, but it has a nice view.\""
  },
  {
    "predicate": "寒い",
    "attitude": "acknowledge",
    "relationship": "stranger",
    "text": "A shop assistant recommends a coat Peter had assumed would be cold because it was thin, insisting it is warm. He bought it half-convinced and wore it outside. However, it was warm, just as the assistant had said. Later, he thanks the assistant: \"I wasn't [modifier] cold. Thank you for recommending it.\""
  },
  {
    "predicate": "寒い",
    "attitude": "neutral",
    "relationship": "stranger",
    "text": "At the entrance, someone about to go in asks Peter how cold it is inside, and he answers: \"It's [modifier] cold.\""
  },
  {
    "predicate": "寒い",
    "attitude": "annoyed",
    "relationship": "stranger",
    "text": "The café Peter has come into has the air conditioning turned up too high, and he can't sit for long. Moving seats doesn't help, so, irritated, he stops a server and says: \"It's [modifier] cold here. Could you turn the temperature up?\""
  },
  {
    "predicate": "寒い",
    "attitude": "encouraging",
    "relationship": "stranger",
    "text": "A café server keeps apologizing for the air conditioning being too strong. Peter reassures her: \"It's not [modifier]cold. A hot drink is all I need.\""
  },
  {
    "predicate": "汚い",
    "attitude": "warning",
    "relationship": "friend",
    "text": "A friend finishes tidying the room before guests arrive and shows Peter. Wanting to be helpful, Peter points out hesitantly: \"Just that shelf is [modifier] dirty. What about wiping it down?\""
  },
  {
    "predicate": "汚い",
    "attitude": "non-committal",
    "relationship": "friend",
    "text": "Peter and a friend are deciding which place to stay at. Not wanting to assert his opinion, Peter cautiously replies: \"That place might be [modifier] dirty, but it's close to the station and cheap.\""
  },
  {
    "predicate": "汚い",
    "attitude": "acknowledge",
    "relationship": "friend",
    "text": "A friend takes Peter to a restaurant he had been avoiding because it was old, saying it is well looked after. He was half-convinced. However, it's clean, just as the friend had said. He thanks his friend: \"You're right, it's not [modifier] dirty. Thanks for bringing me here.\""
  },
  {
    "predicate": "汚い",
    "attitude": "neutral",
    "relationship": "friend",
    "text": "Back from the viewing, Peter is asked by a friend who is deciding whether to rent the place how dirty it is, and he answers: \"It's [modifier] dirty.\""
  },
  {
    "predicate": "汚い",
    "attitude": "annoyed",
    "relationship": "friend",
    "text": "Peter shares a flat with a friend. It is the friend's turn to clean the shared space, but days have gone by untouched and clutter and dishes have piled up. Having mentioned it a few times with nothing changing, irritated, Peter says: \"This room is [modifier] dirty. When exactly are you going to clean it?\""
  },
  {
    "predicate": "汚い",
    "attitude": "encouraging",
    "relationship": "friend",
    "text": "The seats a friend picked out ahead of him were dirty. Since she apologizes for it, Peter reassures her: \"It's not [modifier]dirty. A quick wipe and it's totally fine.\""
  },
  {
    "predicate": "汚い",
    "attitude": "warning",
    "relationship": "colleague",
    "text": "The colleague in charge of preparing for the client visit finishes tidying the reception room. Wanting to be helpful, Peter points out hesitantly: \"Just that table is [modifier] dirty. What about wiping it down?\""
  },
  {
    "predicate": "汚い",
    "attitude": "non-committal",
    "relationship": "colleague",
    "text": "Peter is asked by a colleague for his view on accommodation for the business trip. Not wanting to assert his opinion, he cautiously replies: \"That place might be [modifier] dirty, but it's close to the station and cheap.\""
  },
  {
    "predicate": "汚い",
    "attitude": "acknowledge",
    "relationship": "colleague",
    "text": "A colleague recommends a canteen Peter had been avoiding because it was old, saying it is well looked after. He went in half-convinced. However, it's clean, just as the colleague had said. He thanks the colleague: \"You're right, it's not [modifier] dirty. Thanks for telling me.\""
  },
  {
    "predicate": "汚い",
    "attitude": "neutral",
    "relationship": "colleague",
    "text": "Back from checking the space, Peter is asked by a colleague who will be using it how dirty the room is, and he answers: \"It's [modifier] dirty.\""
  },
  {
    "predicate": "汚い",
    "attitude": "annoyed",
    "relationship": "colleague",
    "text": "The colleague whose turn it is to clean the shared space hasn't touched it for days, and rubbish and dishes have piled up. Peter has mentioned it a few times with nothing changing, and, irritated, he says: \"This room is [modifier] dirty. When are you going to clean it?\""
  },
  {
    "predicate": "汚い",
    "attitude": "encouraging",
    "relationship": "colleague",
    "text": "The meeting room a colleague booked ahead of him was dirty. Since she apologizes for it, Peter reassures her: \"It's not [modifier]dirty. A quick wipe and there's no problem.\""
  },
  {
    "predicate": "汚い",
    "attitude": "warning",
    "relationship": "boss",
    "text": "The room the boss has designated for the discussion with the clients has stains on the wall and floor that won't come off. Wanting to be helpful, he points out hesitantly: \"It might look [modifier] dirty to them, so wouldn't it be better to move to a different room?\""
  },
  {
    "predicate": "汚い",
    "attitude": "non-committal",
    "relationship": "boss",
    "text": "Peter is asked by his boss for his view on accommodation for the business trip. Not wanting to assert his opinion, he cautiously replies: \"It might be [modifier] dirty, but it's close to the station and cheap.\""
  },
  {
    "predicate": "汚い",
    "attitude": "acknowledge",
    "relationship": "boss",
    "text": "The boss recommends a restaurant Peter had been avoiding because it was old, saying it is well looked after. He went in half-convinced. However, it was clean, just as his boss had said. The next day, he thanks his boss: \"You were right, it wasn't [modifier] dirty. Thank you for telling me.\""
  },
  {
    "predicate": "汚い",
    "attitude": "neutral",
    "relationship": "boss",
    "text": "Asked by his boss how dirty the venue he checked was, Peter answers: \"It was [modifier] dirty.\""
  },
  {
    "predicate": "汚い",
    "attitude": "annoyed",
    "relationship": "boss",
    "text": "An hour before the clients arrive, Peter notices the reception room hasn't been tidied. The boss had taken on the preparations himself, but no matter how many times Peter checked, nothing had been done. Thinking that he is going to end up cleaning up after this man again, Peter says to his boss: \"This room might give the clients a [modifier] dirty impression, so I'll tidy it up.\""
  },
  {
    "predicate": "汚い",
    "attitude": "encouraging",
    "relationship": "boss",
    "text": "The meeting room the boss booked ahead of him was dirty. Seeing that he is bothered by it, Peter reassures him: \"It's not [modifier]dirty. A quick wipe and there's no problem.\""
  },
  {
    "predicate": "汚い",
    "attitude": "warning",
    "relationship": "stranger",
    "text": "A server in the restaurant finishes setting Peter's table and is about to move to the next. Wanting to be helpful, Peter points out hesitantly: \"Just the edge of that table looks [modifier] dirty. Maybe it's worth wiping it down?\""
  },
  {
    "predicate": "汚い",
    "attitude": "non-committal",
    "relationship": "stranger",
    "text": "At the entrance to the inn, another guest asks Peter which room is better. Not wanting to assert his opinion, Peter cautiously replies: \"That one seems [modifier] dirty, but it's cheap and spacious.\""
  },
  {
    "predicate": "汚い",
    "attitude": "acknowledge",
    "relationship": "stranger",
    "text": "A passing server recommends a restaurant Peter had been avoiding because it was old, saying it is well looked after. He went in half-convinced. However, it's clean, just as the server had said. He thanks the server: \"You're right, it's not [modifier] dirty. Thank you for recommending it.\""
  },
  {
    "predicate": "汚い",
    "attitude": "neutral",
    "relationship": "stranger",
    "text": "At the entrance to the inn, someone about to stay there asks Peter how dirty the rooms are, and he answers: \"They're [modifier] dirty.\""
  },
  {
    "predicate": "汚い",
    "attitude": "annoyed",
    "relationship": "stranger",
    "text": "The hotel room Peter checked into on his business trip has hair on the floor and grime left around the sink. Irritated after a long journey, he goes down to the front desk and says: \"The room is [modifier] dirty. Could you have it cleaned?\""
  },
  {
    "predicate": "汚い",
    "attitude": "encouraging",
    "relationship": "stranger",
    "text": "The receptionist at the hotel Peter is staying at keeps apologizing for the cleaning not having been done properly, so Peter reassures her: \"The room isn't [modifier]dirty. A quick wipe and it stopped bothering me.\""
  }
];
